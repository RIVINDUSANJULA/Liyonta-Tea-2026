"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, ScrollControls, Scroll, useScroll } from "@react-three/drei";
import * as THREE from "three";
import ScrollOverlay from "./ScrollOverlay";

// ==========================================
// 🌿 TWEAK PARAMETERS HERE 🌿
// ==========================================

const LEAF_COUNT = 150;
const BRANCH_COUNT = 40;

// Organic mix optimized for light backdrops
const LEAF_COLORS = ["#a8e6cf", "#1b4332"]; // Matcha Green, Deep Emerald
const BRANCH_COLORS = ["#9c6644", "#b5651d"]; // Warm Amber, Golden Brown

const SCENE_HEIGHT = 40; 
const SCENE_WIDTH = 25;  
const SCENE_DEPTH = 50;  

const dummy = new THREE.Object3D();

function CameraController() {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    // scroll.offset goes from 0 (top) to 1 (bottom)
    const offset = scroll.offset;
    
    // Smoothly fly through the Z-axis 
    camera.position.z = THREE.MathUtils.lerp(15, -25, offset);
    // Depth shift on Y
    camera.position.y = THREE.MathUtils.lerp(0, -8, offset);
  });
  
  return null;
}

function Lighting() {
  const scroll = useScroll();
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    if (!lightRef.current) return;
    const offset = scroll.offset;
    lightRef.current.position.x = THREE.MathUtils.lerp(10, -10, offset);
    lightRef.current.position.z = THREE.MathUtils.lerp(15, -5, offset);
  });

  return (
    <>
      {/* Higher ambient light due to cream background so colors pop beautifully */}
      <ambientLight intensity={0.9} />
      {/* Crisp directional light for edge definition */}
      <directionalLight ref={lightRef} position={[10, 15, 15]} intensity={1.5} />
      <directionalLight position={[-5, -10, -5]} intensity={0.6} color="#ffffff" />
    </>
  );
}

function Leaves() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { camera } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < LEAF_COUNT; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * SCENE_WIDTH,
          (Math.random() - 0.5) * SCENE_HEIGHT,
          Math.random() * -SCENE_DEPTH + 15
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        speed: Math.random() * 0.5 + 0.2, 
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        driftOffset: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.5 + 0.5,
        scale: Math.random() * 0.2 + 0.1,
      });
    }
    return temp;
  }, []);

  const colorArray = useMemo(() => {
    const colors = new Float32Array(LEAF_COUNT * 3);
    const color = new THREE.Color();
    for (let i = 0; i < LEAF_COUNT; i++) {
      color.set(LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)]);
      color.toArray(colors, i * 3);
    }
    return colors;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      p.position.y += p.speed * 0.02; 

      if (p.position.y > camera.position.y + SCENE_HEIGHT / 2) {
        p.position.y -= SCENE_HEIGHT;
        p.position.x = (Math.random() - 0.5) * SCENE_WIDTH;
      }
      
      if (p.position.z > camera.position.z + 5) {
        p.position.z -= SCENE_DEPTH; 
      } else if (p.position.z < camera.position.z - SCENE_DEPTH + 5) {
        p.position.z += SCENE_DEPTH;
      }

      const xDrift = Math.sin(time * p.driftSpeed + p.driftOffset) * 0.005;
      const zDrift = Math.cos(time * p.driftSpeed + p.driftOffset) * 0.005;
      p.position.x += xDrift;
      p.position.z += zDrift;

      p.rotation.x += p.rotSpeed.x;
      p.rotation.y += p.rotSpeed.y;
      p.rotation.z += p.rotSpeed.z;

      dummy.position.copy(p.position);
      dummy.rotation.copy(p.rotation);
      dummy.scale.set(p.scale, p.scale * 2.5, p.scale * 0.1); 
      dummy.updateMatrix();
      
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, LEAF_COUNT]}>
      <octahedronGeometry args={[1, 0]}>
        <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
      </octahedronGeometry>
      <meshStandardMaterial vertexColors roughness={0.4} side={THREE.DoubleSide} />
    </instancedMesh>
  );
}

function Branches() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { camera } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < BRANCH_COUNT; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * SCENE_WIDTH,
          (Math.random() - 0.5) * SCENE_HEIGHT,
          Math.random() * -SCENE_DEPTH + 15
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        speed: Math.random() * 0.3 + 0.1, 
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        driftOffset: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.3 + 0.2, 
        scale: Math.random() * 0.4 + 0.2,
      });
    }
    return temp;
  }, []);

  const colorArray = useMemo(() => {
    const colors = new Float32Array(BRANCH_COUNT * 3);
    const color = new THREE.Color();
    for (let i = 0; i < BRANCH_COUNT; i++) {
      color.set(BRANCH_COLORS[Math.floor(Math.random() * BRANCH_COLORS.length)]);
      color.toArray(colors, i * 3);
    }
    return colors;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      p.position.y += p.speed * 0.02;
      
      if (p.position.y > camera.position.y + SCENE_HEIGHT / 2) {
        p.position.y -= SCENE_HEIGHT;
        p.position.x = (Math.random() - 0.5) * SCENE_WIDTH;
      }

      if (p.position.z > camera.position.z + 5) {
        p.position.z -= SCENE_DEPTH; 
      } else if (p.position.z < camera.position.z - SCENE_DEPTH + 5) {
        p.position.z += SCENE_DEPTH;
      }

      p.position.x += Math.sin(time * p.driftSpeed + p.driftOffset) * 0.003;
      p.position.z += Math.cos(time * p.driftSpeed + p.driftOffset) * 0.003;

      p.rotation.x += p.rotSpeed.x;
      p.rotation.y += p.rotSpeed.y;
      p.rotation.z += p.rotSpeed.z;

      dummy.position.copy(p.position);
      dummy.rotation.copy(p.rotation);
      dummy.scale.set(p.scale * 0.1, p.scale, p.scale * 0.1); 
      dummy.updateMatrix();
      
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, BRANCH_COUNT]}>
      <cylinderGeometry args={[1, 1, 4, 3]}>
        <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
      </cylinderGeometry>
      <meshStandardMaterial vertexColors roughness={0.7} />
    </instancedMesh>
  );
}

function SceneGroup() {
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Leaves />
      <Branches />
    </Float>
  );
}

export default function TeaJourneyCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 1.5]} 
      gl={{ alpha: true, antialias: false }} 
    >
      <ScrollControls pages={4} damping={0.2}>
        <Lighting />
        <SceneGroup />
        <CameraController />
        
        <Scroll html style={{ width: "100%" }}>
          <ScrollOverlay />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
