"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  Preload,
  AdaptiveDpr,
  AdaptiveEvents,
  Bvh,
} from "@react-three/drei";
import * as THREE from "three";
import HeroLeaf   from "./HeroLeaf";
import ProductBox from "./ProductBox";
import LeafMist   from "./LeafMist";

/**
 * MouseParallaxRig — wraps the two hero objects.
 * Smoothly lerps the group's rotation toward the current mouse position,
 * simulating a spring-physics parallax camera feel.
 */
function MouseParallaxRig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // state.pointer.x / .y are in [-1, 1] normalized coords
    // We apply a gentle ±8° rotation response
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.pointer.x * 0.14,   // max ~8 degrees
      delta * 2.5                // lerp factor — higher = snappier
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -state.pointer.y * 0.08,
      delta * 2.5
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

/**
 * OrbitingKeyLight — a PointLight that slowly circles the scene.
 * Creates dynamic, ever-changing reflections on the metallic box
 * and the waxy leaf surface.
 */
function OrbitingKeyLight() {
  const lightRef = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.25; // very slow orbit
    if (lightRef.current) {
      lightRef.current.position.x = Math.cos(t) * 8;
      lightRef.current.position.z = Math.sin(t) * 8;
    }
  });

  return <pointLight ref={lightRef} intensity={4} color="#ffffff" position={[8, 4, 8]} decay={0.5} />;
}

/**
 * HeroScene — Client-side 3D canvas.
 * Contains all Three.js/R3F logic in one fixed-position canvas
 * that acts as the background for the entire page.
 *
 * Performance levers:
 * - AdaptiveDpr: reduces pixel ratio on low-end devices automatically
 * - AdaptiveEvents: pauses when tab is hidden
 * - Bvh: fast raycasting for hover interactions
 * - Shadows: soft, low resolution for performance
 * - antialias: false (MSAA is expensive on mobile)
 */
export default function HeroScene() {
  return (
    <div className="fixed inset-0 w-full h-full z-0" style={{ touchAction: "none" }}>
      <Canvas
        shadows
        dpr={[0.75, 1.5]}                 // never exceeds 1.5x on mobile
        camera={{ position: [0, 0, 9], fov: 42 }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,               // mobile-friendly
          alpha: false,
          stencil: false,
        }}
      >
        <color attach="background" args={["#020602"]} />
        <fog attach="fog" args={["#020602", 18, 35]} />

        <Suspense fallback={null}>

          {/* ── Lighting ──────────────────────────────────────────── */}
          <ambientLight intensity={0.5} color="#d8f0d8" />
          <directionalLight
            position={[5, 8, 5]}
            intensity={2}
            color="#ffffff"
            castShadow
            shadow-mapSize={[512, 512]}   // low-res shadow map for performance
            shadow-camera-near={0.1}
            shadow-camera-far={30}
          />
          <directionalLight position={[-5, 2, -5]} intensity={0.8} color="#afbd22" />
          <OrbitingKeyLight />

          {/* ── Background leaf particle cloud (NOT inside BVH — no raycasting needed) */}
          <LeafMist />

          {/* ── Hero objects wrapped in mouse parallax rig ────────── */}
          <Bvh>
            <MouseParallaxRig>
              <HeroLeaf />
              <ProductBox />
            </MouseParallaxRig>
          </Bvh>

          {/* ── Soft floor shadow ─────────────────────────────────── */}
          <ContactShadows
            position={[0, -3, 0]}
            opacity={0.4}
            scale={16}
            blur={3}
            far={8}
            color="#001a00"
            resolution={256}             // low res for mobile
          />

          {/* ── Environment (HDRI reflection map) ─────────────────── */}
          <Environment preset="forest" />

          {/* ── Optimization enforcers ────────────────────────────── */}
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Preload all />

        </Suspense>
      </Canvas>
    </div>
  );
}
