"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Text, RenderTexture } from "@react-three/drei";
import * as THREE from "three";

/**
 * ProductBox — Interactive tea tin with hover "unboxing" animation.
 *
 * Design:
 * - Body: Obsidian black RoundedBox with brushed gold accent ring
 * - Lid: Separate geometry that lifts and tilts on hover
 * - Label: RenderTexture generates "LIYONTA / PURE CEYLON" text directly onto the mesh
 * - Inner glow: AdditiveBlending emissive plane blooms through the open lid
 */
export default function ProductBox() {
  const [hovered, setHovered] = useState(false);
  const lidGroupRef  = useRef<THREE.Group>(null!);
  const glowRef      = useRef<THREE.Mesh>(null!);
  const orbitRef     = useRef<THREE.PointLight>(null!);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // -- Lid animation: smooth lerp open/close ------------------------------------
    if (lidGroupRef.current) {
      const tY  = hovered ? 1.1 : 0;
      const tRX = hovered ? -0.25 : 0;
      lidGroupRef.current.position.y = THREE.MathUtils.lerp(lidGroupRef.current.position.y, tY, delta * 5);
      lidGroupRef.current.rotation.x = THREE.MathUtils.lerp(lidGroupRef.current.rotation.x, tRX, delta * 5);
    }

    // -- Inner glow pulse (sine wave for organic feel) ----------------------------
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      const targetOpacity = hovered ? 0.75 + Math.sin(t * 6) * 0.15 : 0;
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, delta * 6);
    }

    // -- Orbiting fill light for dynamic reflections on the metallic box ----------
    if (orbitRef.current) {
      orbitRef.current.position.x = Math.cos(t * 0.4) * 5;
      orbitRef.current.position.z = Math.sin(t * 0.4) * 5;
    }
  });

  return (
    <group
      position={[-1.0, -1.4, 0]}
      onPointerEnter={(e) => { e.stopPropagation(); setHovered(true);  document.body.style.cursor = "pointer"; }}
      onPointerLeave={() =>  { setHovered(false); document.body.style.cursor = "auto"; }}
    >
      {/* Orbiting fill light — creates moving reflections */}
      <pointLight ref={orbitRef} intensity={3} color="#D4AF37" position={[5, 3, 5]} />

      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.4}>

        {/* ── Box Body ─────────────────────────────────────────────── */}
        <RoundedBox args={[1.5, 1.8, 1.5]} radius={0.06} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial color="#0a0a0a" roughness={0.25} metalness={0.9} />
        </RoundedBox>

        {/* ── Gold Accent Ring around mid-body ──────────────────────── */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[0.77, 0.015, 8, 64]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.1} metalness={1} />
        </mesh>

        {/* ── Front face label (RenderTexture = no external image files) ── */}
        <mesh position={[0, 0, 0.762]} castShadow>
          <planeGeometry args={[1.2, 1.4]} />
          <meshStandardMaterial roughness={0.15} metalness={0.6}>
            <RenderTexture attach="map" anisotropy={8}>
              <color attach="background" args={["#080808"]} />
              {/* Gold border lines */}
              <mesh position={[0, 0.45, 0]}>
                <planeGeometry args={[1.8, 0.02]} />
                <meshBasicMaterial color="#D4AF37" />
              </mesh>
              <mesh position={[0, -0.45, 0]}>
                <planeGeometry args={[1.8, 0.02]} />
                <meshBasicMaterial color="#D4AF37" />
              </mesh>
              {/* Brand name */}
              <Text
                fontSize={0.28}
                color="#D4AF37"
                position={[0, 0.12, 0]}
                letterSpacing={0.15}
                font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
              >
                LIYONTA
              </Text>
              <Text fontSize={0.09} color="#c8c8c8" position={[0, -0.17, 0]} letterSpacing={0.25}>
                PURE CEYLON
              </Text>
              <Text fontSize={0.065} color="#D4AF37" position={[0, -0.36, 0]} letterSpacing={0.1}>
                PREMIUM TEA
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>

        {/* ── Inner glow (visible through open lid) ────────────────── */}
        <mesh ref={glowRef} position={[0, 0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.3, 1.3]} />
          <meshBasicMaterial
            color="#D4AF37"
            transparent
            opacity={0}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* ── Lid (separate group so it can lift independently) ────── */}
        <group ref={lidGroupRef}>
          <RoundedBox
            position={[0, 0.95, 0]}
            args={[1.55, 0.18, 1.55]}
            radius={0.06}
            smoothness={4}
            castShadow
          >
            <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.95} />
          </RoundedBox>
          {/* Top lid face label */}
          <mesh position={[0, 1.045, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.2, 1.2]} />
            <meshStandardMaterial roughness={0.1} metalness={1}>
              <RenderTexture attach="map" anisotropy={4}>
                <color attach="background" args={["#090909"]} />
                <Text fontSize={0.18} color="#D4AF37" position={[0, 0.05, 0]} letterSpacing={0.2}
                  font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
                >
                  LIYONTA
                </Text>
                <Text fontSize={0.06} color="#888" position={[0, -0.15, 0]} letterSpacing={0.15}>
                  EST. SOUTHERN PROVINCE
                </Text>
              </RenderTexture>
            </meshStandardMaterial>
          </mesh>
          {/* Lid accent ring */}
          <mesh position={[0, 0.95, 0]}>
            <torusGeometry args={[0.79, 0.012, 6, 64]} />
            <meshStandardMaterial color="#D4AF37" roughness={0.1} metalness={1} />
          </mesh>
        </group>

      </Float>
    </group>
  );
}
