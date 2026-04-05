"use client";

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  Text, 
  Environment, 
  ContactShadows, 
  PresentationControls,
  Stage,
  PerspectiveCamera,
  Preload,
  ScrollControls,
  useScroll,
  Points,
  PointMaterial
} from '@react-three/drei';
import * as THREE from 'three';

// 1. Particle System: Golden Dust / Steam
function GoldenDust({ count = 2000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1;
    ref.current.rotation.y = t;
    ref.current.rotation.x = t * 0.5;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4AF37"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// 2. The Leaf: Geometric stylized representation
function TeaLeaf(props: any) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  // Create a leaf shape
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.quadraticCurveTo(1, 1, 0, 2);
    s.quadraticCurveTo(-1, 1, 0, 0);
    return s;
  }, []);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh {...props} ref={mesh} rotation={[0, 0, Math.PI / 4]}>
        <extrudeGeometry args={[shape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.1 }]} />
        <meshPhysicalMaterial 
          color="#064E3B" 
          emissive="#D4AF37"
          emissiveIntensity={0.1}
          metalness={0.8} 
          roughness={0.2} 
          clearcoat={1}
        />
      </mesh>
    </Float>
  );
}

// 3. The Scene Controller: Scroll interactions
function Scene() {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null!);

  useFrame(() => {
    const r1 = scroll.range(0, 1 / 4);
    const r2 = scroll.range(1 / 4, 1 / 2);
    const r3 = scroll.range(1 / 2, 3 / 4);
    
    // Rotate model based on scroll
    if (group.current) {
      group.current.rotation.y = r1 * Math.PI * 2;
      group.current.position.y = -r1 * 2;
      group.current.scale.setScalar(1 + r2 * 0.5);
    }
  });

  return (
    <group ref={group}>
      <Stage environment="sunset" intensity={0.5} contactShadow={false}>
        <TeaLeaf position={[0, 0, 0]} scale={1} />
      </Stage>
      <ContactShadows opacity={0.4} scale={10} blur={2.4} far={4.5} />
    </group>
  );
}

export default function Experience3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.15}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#D4AF37" />
            
            <GoldenDust />
            <Scene />
            
            <Environment preset="city" />
            <Preload all />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
