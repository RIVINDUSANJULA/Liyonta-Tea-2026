"use client";

import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial,
  Text, 
  Environment, 
  ContactShadows, 
  PerspectiveCamera,
  Preload,
  ScrollControls,
  useScroll,
  Points,
  PointMaterial,
  AdaptiveDpr,
  SpotLight,
  Float as DreiFloat
} from '@react-three/drei';
import * as THREE from 'three';

// 1. "Southern Mist" Particle System
function SouthernMist({ count = 3000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);
  const scroll = useScroll();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05;
    const offset = scroll.offset;
    ref.current.rotation.y = t + offset * 0.5;
    ref.current.position.y = Math.sin(t) * 0.5;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#F1F5F1"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.2}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// 2. High-Detail "Liquid Leaf" (Amber Glass Shaders)
function LiquidLeaf() {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  // Organic distorted shape using Lathe
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 10; i++) {
      pts.push(new THREE.Vector2(Math.sin(i * 0.2) * 2 + 0.1, (i - 5) * 0.5));
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      const t = state.clock.getElapsedTime();
      mesh.current.rotation.x = Math.sin(t * 0.5) * 0.2;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <DreiFloat speed={4} rotationIntensity={1.5} floatIntensity={2}>
      <mesh 
        ref={mesh} 
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
      >
        <latheGeometry args={[points, 32]} />
        <meshPhysicalMaterial
          color="#D4AF37"
          transmission={1}
          thickness={2.5}
          roughness={0.15}
          metalness={0.1}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          attenuationColor="#D4AF37"
          attenuationDistance={1}
        />
      </mesh>
    </DreiFloat>
  );
}

// 3. "3D Product Tins" for Carousel
function ProductTin({ position, color, texture, title }: any) {
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[1, 1, 3, 32]} />
        <meshPhysicalMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2} 
          clearcoat={1} 
        />
      </mesh>
      <Text
        position={[0, -2, 0]}
        fontSize={0.3}
        color={color}
        font="/fonts/PlayfairDisplay-Bold.ttf" // Note: Fallback to default sans if fonts not public
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  );
}

// 4. Scene Controller with Dynamic Lighting and Camera Fly-through
function Scene() {
  const scroll = useScroll();
  const { viewport, mouse } = useThree();
  const lightRef = useRef<THREE.SpotLight>(null!);

  useFrame((state) => {
    const offset = scroll.offset;
    
    // Camera Fly-through path
    state.camera.position.z = THREE.MathUtils.lerp(10, 2, offset);
    state.camera.position.y = THREE.MathUtils.lerp(0, -2, offset);
    state.camera.lookAt(0, 0, 0);

    // Dynamic Spotlight following cursor
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    if (lightRef.current) {
      lightRef.current.position.set(x, y, 5);
      lightRef.current.target.position.set(0, 0, 0);
    }
  });

  return (
    <>
      <SpotLight
        ref={lightRef}
        intensity={2}
        distance={20}
        angle={0.15}
        penumbra={1}
        color="#D4AF37"
        castShadow
      />
      
      {/* Hero Liquid Leaf */}
      <group position={[0, 0, 0]}>
        <LiquidLeaf />
      </group>

      {/* Product Tins Carousel (Positioned further down in 3D space) */}
      <group position={[0, -10, -5]}>
        <ProductTin position={[-4, 0, 0]} color="#121212" title="Signature Black" />
        <ProductTin position={[0, 0, 0]} color="#064E3B" title="Botanical Green" />
        <ProductTin position={[4, 0, 0]} color="#D4AF37" title="Premium Selection" />
      </group>

      <ContactShadows 
        position={[0, -4, 0]} 
        opacity={0.4} 
        scale={20} 
        blur={2} 
        far={4.5} 
        color="#080A08" 
      />
      <Environment preset="night" />
    </>
  );
}

export default function Experience3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.2}>
            <Scene />
            <AdaptiveDpr pixelated />
            <Preload all />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
