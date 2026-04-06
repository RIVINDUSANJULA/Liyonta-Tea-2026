"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  Preload,
  AdaptiveDpr,
  AdaptiveEvents,
  RenderTexture,
  Text,
  Bvh,
  RoundedBox
} from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// PART 1: PROCEDURAL 3D SCENE GENERATION
// ==========================================

/**
 * 1. The Perfectly Accurate Hero Tea Leaf
 * Procedurally displaces a high-density plane into an organic curled leaf shape
 * using sine waves and maps a vertex color gradient across its surface.
 */
function ProceduralHeroLeaf() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const geoRef = useRef<THREE.PlaneGeometry>(null!);

  // Build vertex colors for the procedural gradient during initialization
  useMemo(() => {
    // We defer the color/position injection step to a useEffect or directly mutate a raw geometry
    // But in React 3 Fiber, we can mutate the geometry ref once it mounts.
  }, []);

  useEffect(() => {
    if (!geoRef.current) return;
    const geometry = geoRef.current;
    
    // We construct a high-res plane [width, height, segmentsW, segmentsH]
    const pos = geometry.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const colorStem = new THREE.Color("#0a1f0a"); // Deep forest at stem
    const colorTip = new THREE.Color("#84c514"); // Vibrant lime at tip

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      
      // Calculate blending ratio based on vertical position
      // y ranges from -1.5 to 1.5 because args=[1, 3] -> half height = 1.5
      const mixRatio = (y + 1.5) / 3.0; 
      
      // Interpolate colors
      const c = colorStem.clone().lerp(colorTip, mixRatio);
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      // Base Arching & Curling (Math instead of physical models)
      // The leaf cups inward on the X axis, and arches backward on the Y axis
      const curlX = Math.abs(x) * Math.abs(x) * 1.5;
      const bendY = Math.sin((y / 1.5) * Math.PI) * 0.5;
      
      // We store the base Z displacement
      pos.setZ(i, curlX + bendY);
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
  }, []);

  // "Breathing" animation inside the useFrame hook - modifies vertices dynamically
  useFrame((state) => {
    if (!geoRef.current) return;
    const geometry = geoRef.current;
    const pos = geometry.attributes.position;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        
        // Base math recalculated
        const curlX = Math.abs(x) * Math.abs(x) * 1.5;
        const bendY = Math.sin((y / 1.5) * Math.PI) * 0.5;
        
        // Dynamic trembling/breathing localized twisting motion simulating a breeze
        const breeze = Math.sin(time * 3 + y * 2) * 0.05 * x;
        const breathing = Math.cos(time * 1.5) * 0.02;

        pos.setZ(i, curlX + bendY + breeze + breathing);
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[0, 1, 0]}>
      <mesh ref={meshRef} castShadow rotation={[-Math.PI / 4, 0, 0]}>
        {/* Procedural Geometry: Plane [width, height, segmentsW, segmentsH] */}
        <planeGeometry ref={geoRef} args={[1, 3, 64, 64]} />
        <meshPhysicalMaterial
          vertexColors
          roughness={0.2}
          metalness={0.1}
          transmission={0.4} // High subsurface scattering logic
          thickness={0.5}
          side={THREE.DoubleSide}
          clearcoat={0.3}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

/**
 * 2. The Premium Product Box (Interactive Unboxing)
 * Uses procedural canvas textures for branding to avoid external JPG/PNGs.
 */
function PremiumBox() {
  const [hovered, setHovered] = useState(false);
  const lidRef = useRef<THREE.Group>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);

  // Mathematical interpolation for smooth opening mechanics without external libs
  useFrame((state, delta) => {
    if (lidRef.current) {
      // Lerp lid Y-position up and rotate X when hovered to simulate unboxing
      const targetY = hovered ? 0.8 : 0;
      const targetRotX = hovered ? -0.2 : 0;
      
      lidRef.current.position.y = THREE.MathUtils.lerp(lidRef.current.position.y, targetY, delta * 5);
      lidRef.current.rotation.x = THREE.MathUtils.lerp(lidRef.current.rotation.x, targetRotX, delta * 5);
    }

    if (glowRef.current) {
        // Pulse the inner glow organically using sine wave
        const material = glowRef.current.material as THREE.MeshBasicMaterial;
        material.opacity = THREE.MathUtils.lerp(
            material.opacity, 
            hovered ? 0.8 + Math.sin(state.clock.elapsedTime * 5) * 0.2 : 0, 
            delta * 5
        );
    }
  });

  return (
    <group 
        position={[0, -2, 0]} 
        onPointerEnter={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
    >
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Base of the Box */}
        <RoundedBox args={[2, 1.5, 1.5]} radius={0.05} castShadow receiveShadow>
          <meshStandardMaterial color="#0a0a0a" roughness={0.3} metalness={0.8} />
        </RoundedBox>

        {/* Emissive internal plane generating the 'volumetric' bloom illusion */}
        <mesh ref={glowRef} position={[0, 0.76, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.8, 1.3]} />
            <meshBasicMaterial color="#D4AF37" transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>

        {/* The Lid of the Box */}
        <group ref={lidRef} position={[0, 0, 0]}>
            <RoundedBox position={[0, 0.8, 0]} args={[2.05, 0.2, 1.55]} radius={0.05} castShadow>
                <meshStandardMaterial color="#0a0a0a" roughness={0.3} metalness={0.8} />
            </RoundedBox>

            {/* Procedural Canvas Branding Face on the Lid */}
            <mesh position={[0, 0.91, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[1.8, 1.2]} />
                <meshStandardMaterial roughness={0.2} metalness={1}>
                {/* Render Text dynamically into a texture instead of importing an image */}
                <RenderTexture attach="map" anisotropy={16}>
                    <color attach="background" args={['#0a0a0a']} />
                    {/* Centered Liyonta Gold Text */}
                    <Text font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff" fontSize={0.25} color="#D4AF37" position={[0, 0.1, 0]}>
                        LIYONTA
                    </Text>
                    <Text fontSize={0.08} color="#F5F5F5" position={[0, -0.2, 0]} letterSpacing={0.2}>
                        PURE CEYLON
                    </Text>
                </RenderTexture>
                </meshStandardMaterial>
            </mesh>
            
            {/* Front Label on Box Lid */}
            <mesh position={[0, 0.8, 0.78]}>
                <planeGeometry args={[0.5, 0.1]} />
                <meshBasicMaterial color="#D4AF37" />
            </mesh>
        </group>
      </Float>
    </group>
  );
}

/**
 * 3. The Kinetic Background (Leaf Mist)
 * Hardware-instanced low-poly diamonds for extreme single-draw-call performance.
 */
function KineticLeafMist() {
  const count = 350;
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Pre-calculate random seeds for each instance
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        factor: 20 + Math.random() * 100, // Amplitude
        speed: 0.005 + Math.random() / 500, // Oscillation speed
        xFactor: -15 + Math.random() * 30, // Initial scatter X
        yFactor: -15 + Math.random() * 30, // Initial scatter Y
        zFactor: -15 + Math.random() * 30, // Initial scatter Z
        scale: 0.01 + Math.random() * 0.04 // Mix of dust and larger leaves
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor, scale } = particle;
      
      // Update time progression
      t = particle.t += speed / 2;

      // Mathematical Swirling Vortex Formula
      // Uses a mixture of cos/sin against time and factors to generate upward helical motion
      const swirlX = Math.cos(t) * (factor / 10);
      const swirlY = Math.sin(t / 2) * (factor / 10) + (t * 2 % 30); // Upward drift mod 30 to loop
      const swirlZ = Math.sin(t) * (factor / 10);

      // Apply coordinates with looping subtraction for continuous falling/rising
      dummy.position.set(
        xFactor + swirlX, 
        (yFactor + swirlY) - 15, // Shift down to offset the positive upward drift
        zFactor + swirlZ
      );
      
      // Rotate dynamically
      dummy.rotation.set(t, t, t);
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  // Low poly diamond shape (simulated tiny leaf/dust)
  const geometry = useMemo(() => new THREE.ConeGeometry(1, 2, 4), []);

  return (
    <instancedMesh ref={meshRef} args={[geometry, undefined, count]}>
      {/* Dark sage green with slight emissive properties to stand out against the void */}
      <meshStandardMaterial color="#2a3a2a" roughness={0.8} metalness={0.2} emissive="#051005" />
    </instancedMesh>
  );
}

/**
 * 4. Engine Core & Camera Setup
 * Governs the fluid mouse parallax grouping and dynamic lighting.
 */
function MainScene() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    // Smooth fluid parallax acting as a spring physics system
    // We linearly interpolate based on the raw pointer input from React Three Fiber
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, delta * 3);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, delta * 3);
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      
      {/* Orbiting Spotlight for dynamic reflections */}
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        decay={0} 
        intensity={3} 
        color="#D4AF37" 
        castShadow 
      />
      <spotLight position={[-10, 10, -10]} intensity={2} color="#F5F5F5" />

      {/* Main interaction group bound by Bvh for raycast optimization */}
      <Bvh>
        <group ref={groupRef}>
          <ProceduralHeroLeaf />
          <PremiumBox />
        </group>
      </Bvh>
      
      <KineticLeafMist />

      {/* Base shadow anchor */}
      <ContactShadows resolution={512} scale={20} blur={2} opacity={0.5} far={10} color="#000000" position={[0, -4, 0]} />
      
      {/* City environment reflection map */}
      <Environment preset="city" />
      
      {/* Extreme Optimization Enforcers */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <Preload all />
    </>
  );
}

// ==========================================
// PART 2: THE 2D OVERLAY & UI (Framer Motion)
// ==========================================

export default function LiyontaExperience() {
  // Lock overflow manually to ensure scroll triggers fire correctly below absolute layers
  useEffect(() => {
    document.body.style.backgroundColor = "#020402";
    document.body.style.color = "#F5F5F5";
  }, []);

  return (
    <main className="relative w-full h-screen overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#020402] font-sans bg-[#020402]">
      
      {/* 3D WEBGL ENGINE LAYER (Fixed Background) */}
      <div className="fixed inset-0 w-full h-full z-0 outline-none">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 40 }} gl={{ powerPreference: "high-performance", antialias: false }}>
          <MainScene />
        </Canvas>
      </div>

      {/* OVERLAY: Modern Glass Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="text-xl font-serif tracking-[0.2em] text-[#D4AF37]">LIYONTA</div>
        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-semibold text-[#F5F5F5]/80">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Our Approach</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">E-Auction</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Collections</a>
        </nav>
      </header>

      {/* FULL-HEIGHT SCROLLABLE UI LAYER */}
      <div className="relative z-10 w-full">
        
        {/* HERO TYPOGRAPHY: Overlay (pointer-events-none lets mouse hit the 3D canvas behind it) */}
        <section className="relative w-full h-screen flex flex-col justify-center items-center pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-32 mix-blend-difference"
          >
            <h1 className="text-[12vw] md:text-[8vw] font-serif leading-none tracking-tight text-[#F5F5F5]">
              PURE CEYLON
            </h1>
            <p className="mt-4 text-xs md:text-sm font-sans uppercase tracking-[0.4em] text-[#D4AF37]">
              The Genesis of Modern Tea Architecture
            </p>
          </motion.div>
        </section>

        {/* SCROLL REVEAL GRID SECTION */}
        <section className="relative w-full min-h-screen bg-[#020402]/80 backdrop-blur-md pt-32 pb-48 border-t border-white/10">
          <div className="container mx-auto px-8 max-w-7xl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="mb-24 md:w-1/2"
            >
                <h2 className="text-4xl md:text-6xl font-serif text-[#D4AF37] mb-6">Mastery, Extracted.</h2>
                <p className="text-lg text-[#F5F5F5]/70 font-light leading-relaxed">
                    Hover the artifact above. We abandoned the industrial age to forge tea leaves through precision algorithms and generational Southern Sri Lankan techniques.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-4"
              >
                <div className="text-3xl font-serif text-[#D4AF37]">01</div>
                <h3 className="text-sm uppercase tracking-[0.3em] font-normal border-b border-white/20 pb-4">The Origin</h3>
                <p className="text-sm text-[#F5F5F5]/60 leading-loose">
                  Cultivated deep in the Southern Province. The unique microclimate compresses flavor into microscopic cellular geometry.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="text-3xl font-serif text-[#D4AF37]">02</div>
                <h3 className="text-sm uppercase tracking-[0.3em] font-normal border-b border-white/20 pb-4">The Craft</h3>
                <p className="text-sm text-[#F5F5F5]/60 leading-loose">
                  Masterfully rolled using proprietary mechanical tension arrays ensuring pristine leaf integrity until total saturation.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <div className="text-3xl font-serif text-[#D4AF37]">03</div>
                <h3 className="text-sm uppercase tracking-[0.3em] font-normal border-b border-white/20 pb-4">The Record</h3>
                <p className="text-sm text-[#F5F5F5]/60 leading-loose">
                   Holding unparalleled historical bidding volume. Acquiring Liyonta is executing an investment in liquid thermodynamics.
                </p>
              </motion.div>
            </div>
            
            {/* Terminal Footer */}
            <div className="mt-48 text-center text-[10px] uppercase tracking-[0.5em] text-white/30">
                PRODUCER: LIYONTA ENGINEERING // SOUTHERN PROVINCE
            </div>
            
          </div>
        </section>
      </div>
    </main>
  );
}
