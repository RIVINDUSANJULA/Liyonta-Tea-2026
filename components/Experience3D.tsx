"use client";

import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Environment,
  ContactShadows,
  Preload,
  AdaptiveDpr,
  AdaptiveEvents,
} from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 1. Instanced Leaf System with Nature Variety
const LEAF_COUNT = 600;
const GREEN_SHADES = [
  new THREE.Color("#afbd22"),
  new THREE.Color("#6db33f"),
  new THREE.Color("#00958f"),
  new THREE.Color("#00b193"),
];

function FloatingLeaves() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { mouse, viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < LEAF_COUNT; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.002 + Math.random() / 500; // Significantly slower speed
      const xFactor = -10 + Math.random() * 20;
      const yFactor = -10 + Math.random() * 20;
      const zFactor = -10 + Math.random() * 20;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    // Mouse radial force
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      // Antigravity drift
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Base position
      let x = (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10;
      let y = (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10;
      let z = (particle.mx / 10) * s + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10;

      // Radial force displacement
      const dx = x - mouseX;
      const dy = y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const forceDropoff = 3;
      if (dist < forceDropoff) {
        const force = (forceDropoff - dist) / forceDropoff;
        x += dx * force * 2; // Dramatic explosive push
        y += dy * force * 2;
      }

      dummy.position.set(x, y, z);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.scale.setScalar(0.05 + Math.abs(Math.sin(t)) * 0.05);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Assign random color once
      if (state.clock.elapsedTime < 0.1) {
        meshRef.current.setColorAt(i, GREEN_SHADES[i % GREEN_SHADES.length]);
      }
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    // Beautiful natural leaf silhouette using Bezier Curves
    s.moveTo(0, 0);
    s.bezierCurveTo(0.6, 0.4, 0.6, 1.5, 0, 2.2);
    s.bezierCurveTo(-0.6, 1.5, -0.6, 0.4, 0, 0);
    return s;
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, LEAF_COUNT]}>
      {/* Paper-thin extrusion with no boxy bevels */}
      <extrudeGeometry args={[shape, { depth: 0.005, bevelEnabled: false, curveSegments: 12 }]} />
      <meshPhysicalMaterial
        metalness={0.1}
        roughness={0.6}
        clearcoat={0.1}
        emissive="#000000" // Remove white emissive to allow true colors!
        emissiveIntensity={0}
      />
    </instancedMesh>
  );
}

// 2. The Weightless Tea Tin
function TeaTin() {
  const groupRef = useRef<THREE.Group>(null!);
  const lidRef = useRef<THREE.Mesh>(null!);
  const bodyRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    if (!groupRef.current) return;

    // GSAP ScrollTrigger for blowing up the tin
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#alchemy-trigger",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          // Explode apart
          if (lidRef.current && bodyRef.current && groupRef.current) {
            lidRef.current.position.y = 1.5 + p * 4;
            lidRef.current.rotation.x = p * 2;
            lidRef.current.rotation.z = p * 1;

            bodyRef.current.position.y = -p * 2;
            bodyRef.current.rotation.x = -p * 1;

            groupRef.current.rotation.y = p * Math.PI * 2;
          }
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        {/* Lid */}
        <mesh ref={lidRef} position={[0, 1.6, 0]} castShadow>
          <cylinderGeometry args={[1.05, 1.05, 0.4, 32]} />
          <meshStandardMaterial color="#EFEFEF" metalness={0.6} roughness={0.2} />
        </mesh>

        {/* Body */}
        <mesh ref={bodyRef} position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[1, 1, 3, 32]} />
          <meshStandardMaterial color="#FAFAFA" metalness={0.5} roughness={0.3} />
          {/* Gold Accent */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[1.01, 1.01, 0.2, 32]} />
            <meshStandardMaterial color="#EAB308" metalness={0.9} roughness={0.1} />
          </mesh>
        </mesh>
      </Float>
    </group>
  );
}

// 3. The Hero Leaf
function HeroLeaf() {
  const leafRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (leafRef.current) {
      leafRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      leafRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      leafRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#alchemy-trigger",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          if (leafRef.current) {
            leafRef.current.scale.setScalar(1 + self.progress * 1.5);
            leafRef.current.position.x = self.progress * 4;
          }
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    // Beautiful natural leaf silhouette using Bezier Curves
    s.moveTo(0, 0);
    s.bezierCurveTo(0.6, 0.4, 0.6, 1.5, 0, 2.2);
    s.bezierCurveTo(-0.6, 1.5, -0.6, 0.4, 0, 0);
    return s;
  }, []);

  return (
    <mesh ref={leafRef} position={[-3, 2, -2]}>
      {/* Paper-thin extrusion with no boxy bevels */}
      <extrudeGeometry args={[shape, { depth: 0.01, bevelEnabled: false, curveSegments: 24 }]} />
      <MeshTransmissionMaterial
        backside
        samples={8}
        thickness={0.02} // Thin glass-like leaf
        chromaticAberration={0.3}
        anisotropy={0.5}
        distortion={0.1}
        distortionScale={0.5}
        temporalDistortion={0.05}
        color="#00b193" // Deep teal base
        attenuationDistance={2}
        attenuationColor="#afbd22" // Lighter green attenuation
      />
    </mesh>
  );
}

export default function Experience3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <spotLight position={[10, 10, 10]} intensity={4} color="#FDFCF8" />
          <spotLight position={[-10, -10, 10]} intensity={2} color="#D4AF37" />
          <directionalLight position={[-5, 5, 5]} intensity={1.5} color="#FFFFFF" castShadow />

          <FloatingLeaves />
          <TeaTin />
          <HeroLeaf />

          <ContactShadows position={[0, -5, 0]} opacity={0.6} scale={20} blur={2.5} far={10} color="#1B3022" />
          <Environment preset="city" />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
