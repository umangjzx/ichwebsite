import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const RotatingGear = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#1E3A8A"
          metalness={0.8}
          roughness={0.2}
          emissive="#E11D2E"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

const FloatingChain = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.15;
      groupRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[i * 0.5 - 1, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.2, 0.06, 16, 32]} />
          <meshStandardMaterial
            color="#64748B"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};

const Particles = ({ count }: { count: number }) => {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#E11D2E"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-3, 2, 4]} intensity={0.5} color="#E11D2E" />
        <pointLight position={[3, -2, 4]} intensity={0.3} color="#1E3A8A" />

        <React.Suspense fallback={null}>
          <RotatingGear position={[2.5, 0.5, 0]} />
          <FloatingChain position={[-3, -0.5, -1]} />
          <Particles count={150} />
          <Stars radius={50} depth={50} count={500} factor={2} fade speed={1} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
