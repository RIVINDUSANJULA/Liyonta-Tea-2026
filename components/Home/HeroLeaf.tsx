"use client";

import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * HeroLeaf — Procedurally generated accurate tea leaf.
 *
 * Approach:
 * 1. Start with a custom Shape that defines the organic leaf silhouette
 *    using bezierCurveTo (asymmetric, like a real Camellia sinensis leaf).
 * 2. Extrude it paper-thin (depth 0.008) — this gives it volume without looking boxy.
 * 3. Apply a MeshPhysicalMaterial with transmission + subsurface-scattering
 *    to simulate the waxy, back-lit quality of real tea leaves.
 * 4. Add a midrib (spine) as a separate thin cylinder for realism.
 * 5. Use vertex colors for the stem-to-tip gradient.
 * 6. Animate via useFrame: a gentle sine-wave breathing + random micro-twitch.
 */
export default function HeroLeaf() {
  const groupRef = useRef<THREE.Group>(null!);

  // ---- Build leaf outline using a real tea leaf silhouette ----------------
  const leafShape = useMemo(() => {
    const s = new THREE.Shape();
    // Start at the stem tip
    s.moveTo(0, 0);
    // Right edge: curves out wide, then tapers to the tip
    s.bezierCurveTo(0.55, 0.3,  0.65, 1.2,  0.25, 2.0);
    s.bezierCurveTo(0.1,  2.5,  0,    2.8,  0,    2.8); // leaf tip
    // Left edge: mirror with slight asymmetry (real leaves aren't perfect)
    s.bezierCurveTo(-0.05, 2.7, -0.6, 2.0,  -0.55, 1.2);
    s.bezierCurveTo(-0.6,  0.6, -0.3, 0.15,  0,    0);
    s.closePath();
    return s;
  }, []);

  // ---- Serrated (toothed) edge lines ------------------------------------------
  const serratedShape = useMemo(() => {
    // We add tiny notch lines to simulate the serrated leaf margin
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    // Step along the right edge, adding tiny ripples (serrations)
    for (let i = 0; i < 12; i++) {
      const t = i / 12;
      const x = 0.55 * (1 - t) + 0.25 * t + Math.cos(t * Math.PI * 5) * 0.04;
      const y = 2.8 * t;
      s.lineTo(x, y);
    }
    s.lineTo(0, 2.8);
    for (let i = 12; i > 0; i--) {
      const t = i / 12;
      const x = -0.55 * (1 - t) - 0.25 * t - Math.cos(t * Math.PI * 5) * 0.04;
      const y = 2.8 * t;
      s.lineTo(x, y);
    }
    s.closePath();
    return s;
  }, []);

  // ---- Extrude settings: paper-thin -----------------------------------------
  const extrudeSettings = useMemo(() => ({
    depth: 0.008, // paper-thin — prevents the "fat box" look
    bevelEnabled: true,
    bevelThickness: 0.003,
    bevelSize: 0.003,
    bevelSegments: 2,
    curveSegments: 24, // smooth curves
  }), []);

  // ---- Bake vertex colors (stem = dark forest, tip = bright lime) ------------
  const leafGeoRef = useRef<THREE.ExtrudeGeometry>(null!);
  useEffect(() => {
    if (!leafGeoRef.current) return;
    const geo = leafGeoRef.current;
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const stemColor = new THREE.Color("#0d2b0d");
    const midColor  = new THREE.Color("#3a7a1a");
    const tipColor  = new THREE.Color("#84c514");

    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i); // y in [0..2.8]
      const t = THREE.MathUtils.clamp(y / 2.8, 0, 1);
      let c: THREE.Color;
      if (t < 0.5) {
        c = stemColor.clone().lerp(midColor, t * 2);
      } else {
        c = midColor.clone().lerp(tipColor, (t - 0.5) * 2);
      }
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  }, []);

  // ---- Animation: floating breeze + micro-twitch ----------------------------
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    // Gentle sway left/right — simulates a natural breeze
    groupRef.current.rotation.z = Math.sin(t * 0.7) * 0.06;
    // Subtle forward/back tilt — the leaf breathing
    groupRef.current.rotation.x = -0.6 + Math.cos(t * 0.5) * 0.04;
    // Micro-twitch on y for organic feel
    groupRef.current.rotation.y = Math.sin(t * 1.1) * 0.03;
  });

  return (
    // Float provides the weightless hover loop; we add internal geometry below
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6} position={[0.8, 0.5, 0]}>
      <group ref={groupRef}>
        {/* ── Main leaf body ─────────────────────────────────────────── */}
        <mesh castShadow receiveShadow scale={0.65}>
          <extrudeGeometry ref={leafGeoRef} args={[leafShape, extrudeSettings]} />
          <meshPhysicalMaterial
            vertexColors
            side={THREE.DoubleSide}
            roughness={0.25}
            metalness={0.05}
            // Transmission simulates light passing through the thin leaf blade
            transmission={0.35}
            thickness={0.3}
            ior={1.45}
            clearcoat={0.4}
            clearcoatRoughness={0.1}
            envMapIntensity={1.2}
          />
        </mesh>

        {/* ── Midrib (central vein / spine) ──────────────────────────── */}
        <mesh position={[0, 0, 0.009]} scale={0.65}>
          <cylinderGeometry args={[0.012, 0.005, 2.8, 6]} />
          <meshPhysicalMaterial color="#0a1f0a" roughness={0.6} metalness={0.1} />
        </mesh>

        {/* ── Stem below leaf ────────────────────────────────────────── */}
        <mesh position={[0, -0.25, 0]} scale={[0.65, 1, 0.65]}>
          <cylinderGeometry args={[0.025, 0.015, 0.5, 6]} />
          <meshPhysicalMaterial color="#1a3a0a" roughness={0.7} />
        </mesh>
      </group>
    </Float>
  );
}
