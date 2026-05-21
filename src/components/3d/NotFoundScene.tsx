import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const BrokenGear = () => {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef1.current) {
      meshRef1.current.rotation.x += delta * 0.3;
      meshRef1.current.rotation.y += delta * 0.2;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x -= delta * 0.2;
      meshRef2.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh ref={meshRef1} position={[-0.8, 0.5, 0]}>
          <torusGeometry args={[0.6, 0.2, 16, 32, Math.PI * 1.2]} />
          <meshStandardMaterial
            color="#64748B"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.7} floatIntensity={2}>
        <mesh ref={meshRef2} position={[0.8, -0.3, 0]}>
          <torusGeometry args={[0.5, 0.18, 16, 32, Math.PI * 0.8]} />
          <meshStandardMaterial
            color="#1E3A8A"
            metalness={0.8}
            roughness={0.3}
            emissive="#E11D2E"
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>
    </>
  );
};

const NotFoundScene: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-50">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 3]} intensity={0.6} />
        <pointLight position={[-2, 1, 3]} intensity={0.8} color="#E11D2E" />
        <React.Suspense fallback={null}>
          <BrokenGear />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default NotFoundScene;
