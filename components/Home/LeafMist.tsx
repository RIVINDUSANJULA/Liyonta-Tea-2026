"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LEAF_COUNT = 200; // Low count for mobile performance

/**
 * LeafMist — InstancedMesh of organic leaf-shaped geometry.
 *
 * Key decisions:
 * - Single draw call via InstancedMesh (200 instances)
 * - Leaf shape: ExtrudeGeometry from a bezier Shape (real leaf outline)
 * - Two "tiers": small dust particles (scale ~0.03) and large leaves (scale ~0.15)
 * - Movement: slow upward drift + per-leaf independent sine/cosine wobble
 * - Colors: 4 natural green/teal tones from the brand palette
 */
export default function LeafMist() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy   = useMemo(() => new THREE.Object3D(), []);

  // Pre-seeded per-leaf random data — never recalculated inside useFrame
  const leaves = useMemo(() => {
    const palette = [
      new THREE.Color("#afbd22"),
      new THREE.Color("#6db33f"),
      new THREE.Color("#00958f"),
      new THREE.Color("#00b193"),
    ];
    return Array.from({ length: LEAF_COUNT }, (_, i) => ({
      x0: (Math.random() - 0.5) * 28,       // spawn spread X
      y0: -12 + Math.random() * 24,          // spawn spread Y
      z0: -12 + Math.random() * 8,           // depth spread
      driftSpeed: 0.15 + Math.random() * 0.3, // upward drift speed (SLOW)
      wobbleFreq: 0.3 + Math.random() * 0.5, // horizontal sway frequency
      wobbleAmp:  0.4 + Math.random() * 0.8, // horizontal sway amplitude
      rotSpeed:   (Math.random() - 0.5) * 0.3, // rotation speed
      // Two tiers: 60% small dust, 40% larger leaves
      scale: i < LEAF_COUNT * 0.6
        ? 0.02 + Math.random() * 0.04   // small dust
        : 0.08 + Math.random() * 0.12,  // larger leaves
      color: palette[i % palette.length],
      phaseOffset: Math.random() * Math.PI * 2, // unique phase per leaf
    }));
  }, []);

  // Leaf silhouette geometry (same approach as HeroLeaf, but simpler)
  const leafGeo = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.5, 0.3, 0.55, 1.1, 0.2, 1.8);
    shape.bezierCurveTo(0.05, 2.2, 0, 2.4, 0, 2.4);
    shape.bezierCurveTo(-0.05, 2.2, -0.5, 1.6, -0.5, 1.1);
    shape.bezierCurveTo(-0.5, 0.5, -0.2, 0.1, 0, 0);
    shape.closePath();

    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.006,
      bevelEnabled: false,
      curveSegments: 8, // low for performance
    });
  }, []);

  // Material — shared, low cost
  const leafMat = useMemo(() => new THREE.MeshStandardMaterial({
    roughness: 0.6,
    metalness: 0.1,
    side: THREE.DoubleSide,
  }), []);

  // Assign colors on first frame
  const colorsSet = useRef(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    // Assign colors exactly once after mount
    if (!colorsSet.current) {
      leaves.forEach((leaf, i) => {
        meshRef.current.setColorAt(i, leaf.color);
      });
      if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
      colorsSet.current = true;
    }

    leaves.forEach((leaf, i) => {
      // Upward drift: linear Y movement modulo 24 units, then wrap back to bottom
      // Slow: driftSpeed ~0.15–0.45 world units/sec
      const elapsed = t * leaf.driftSpeed + leaf.phaseOffset;
      const y = leaf.y0 + (elapsed % 24) - 12;

      // Horizontal sway: sine wave gives natural floating oscillation
      const x = leaf.x0 + Math.sin(t * leaf.wobbleFreq + leaf.phaseOffset) * leaf.wobbleAmp;
      const z = leaf.z0 + Math.cos(t * leaf.wobbleFreq * 0.7 + leaf.phaseOffset) * 0.3;

      dummy.position.set(x, y, z);

      // Lazy tumble rotation: each leaf spins at a different speed and axis
      dummy.rotation.set(
        t * leaf.rotSpeed,
        t * leaf.rotSpeed * 0.7,
        Math.sin(t * leaf.wobbleFreq + leaf.phaseOffset) * 0.4
      );

      dummy.scale.setScalar(leaf.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[leafGeo, leafMat, LEAF_COUNT]}
      frustumCulled // three.js built-in frustum culling
    />
  );
}
