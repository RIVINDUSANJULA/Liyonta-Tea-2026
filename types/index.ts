import * as THREE from 'three';

export interface TeaParticle {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  speed: number;
  rotSpeed: THREE.Vector3;
  driftOffset: number;
  driftSpeed: number;
  scale: number;
}
