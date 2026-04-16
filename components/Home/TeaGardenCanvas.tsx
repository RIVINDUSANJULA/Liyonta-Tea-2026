"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// ==========================================
// 🌿 TWEAK PARAMETERS HERE 🌿
// ==========================================

// --- COUNTS ---
const LEAF_COUNT = 150;
const BRANCH_COUNT = 40;

// --- COLORS ---
// Tea Leaves (Matcha, Emerald, Jade)
const LEAF_COLORS = ["#a8e6cf", "#1b4332", "#40916c"];
// Branches (Warm Amber, Roasted Oolong)
const BRANCH_COLORS = ["#9c6644", "#7f4f24"];

// --- SCENE BOUNDS ---
// Approximate frustum boundaries for looping
const SCENE_HEIGHT = 25;
const SCENE_WIDTH = 20;
const SCENE_DEPTH = 10;

// Shared dummy object to compute matrix without memory allocation overhead
const dummy = new THREE.Object3D();

function Leaves() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Initialize leaf particle data once
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < LEAF_COUNT; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * SCENE_WIDTH,
          (Math.random() - 0.5) * SCENE_HEIGHT,
          (Math.random() - 0.5) * SCENE_DEPTH
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        // --- TWEAK ANIMATION SPEED HERE ---
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

  // Initialize random vertex colors based on chosen palette
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
      // Upward movement
      p.position.y += p.speed * 0.02; // Tweak vertical speed multiplier

      // Loop elements seamlessly when they float past the top frustum
      if (p.position.y > SCENE_HEIGHT / 2) {
        p.position.y = -SCENE_HEIGHT / 2;
        // Optionally randomize x/z again on respawn
        p.position.x = (Math.random() - 0.5) * SCENE_WIDTH;
      }

      // Sine-wave horizontal drift simulating a soft breeze
      const xDrift = Math.sin(time * p.driftSpeed + p.driftOffset) * 0.005;
      const zDrift = Math.cos(time * p.driftSpeed + p.driftOffset) * 0.005;
      p.position.x += xDrift;
      p.position.z += zDrift;

      // Independent tumbling rotation
      p.rotation.x += p.rotSpeed.x;
      p.rotation.y += p.rotSpeed.y;
      p.rotation.z += p.rotSpeed.z;

      // Update dummy transform and set to instance
      dummy.position.copy(p.position);
      dummy.rotation.copy(p.rotation);
      // Scale dummy to create an elongated diamond leaf shape from a simple octahedron
      dummy.scale.set(p.scale, p.scale * 2.5, p.scale * 0.1);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, LEAF_COUNT]}>
      {/* Low-poly shape that becomes a leaf shape via matrix scaling */}
      <octahedronGeometry args={[1, 0]}>
        <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
      </octahedronGeometry>
      <meshStandardMaterial vertexColors roughness={0.6} side={THREE.DoubleSide} />
    </instancedMesh>
  );
}

function Branches() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < BRANCH_COUNT; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * SCENE_WIDTH,
          (Math.random() - 0.5) * SCENE_HEIGHT,
          (Math.random() - 0.5) * SCENE_DEPTH
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        speed: Math.random() * 0.3 + 0.1, // Branches move slightly slower
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        driftOffset: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.3 + 0.2, // Tweak breeze effect speed
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

      if (p.position.y > SCENE_HEIGHT / 2) {
        p.position.y = -SCENE_HEIGHT / 2;
        p.position.x = (Math.random() - 0.5) * SCENE_WIDTH;
      }

      p.position.x += Math.sin(time * p.driftSpeed + p.driftOffset) * 0.003;
      p.position.z += Math.cos(time * p.driftSpeed + p.driftOffset) * 0.003;

      p.rotation.x += p.rotSpeed.x;
      p.rotation.y += p.rotSpeed.y;
      p.rotation.z += p.rotSpeed.z;

      dummy.position.copy(p.position);
      dummy.rotation.copy(p.rotation);
      // Scale into thin, short cylindric branch shapes
      dummy.scale.set(p.scale * 0.1, p.scale, p.scale * 0.1);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined as any, undefined as any, BRANCH_COUNT]}>
      {/* Low-poly cylinder for thin branches */}
      <cylinderGeometry args={[1, 1, 4, 3]}>
        <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
      </cylinderGeometry>
      <meshStandardMaterial vertexColors roughness={0.9} />
    </instancedMesh>
  );
}

function SceneGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  // Subtle mouse parallax effect without heavy raycasting
  useFrame(() => {
    if (!groupRef.current) return;
    // Shift slightly opposite to pointer for parallax feel
    const targetX = (mouse.x * -1.5);
    const targetY = (mouse.y * -1.5);

    // Smooth lerping
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Float adds macro breathing movement to the entire scene */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
        <Leaves />
        <Branches />
      </Float>
    </group>
  );
}

export default function TeaGardenCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      // Performance optimization: limit pixel ratio and disable anti-alias if extreme performance is needed
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false }} // alpha: true to blend with Tailwind background
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} />
      {/* Soft secondary highlight */}
      <directionalLight position={[-5, -10, -5]} intensity={0.4} color="#a8e6cf" />

      <SceneGroup />
    </Canvas>
  );
}
