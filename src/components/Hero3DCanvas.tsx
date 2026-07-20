'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function WavingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  
  // Track mouse coordinates for dynamic rotation
  const mouse = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinates between -1 and 1
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Lerp mouse coordinates for ultra-smooth fluid response
    mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.04;
    mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.04;

    // Apply rotation based on mouse coordinates + gentle self-rotation
    meshRef.current.rotation.x = mouse.current.y * 0.35 + state.clock.getElapsedTime() * 0.06;
    meshRef.current.rotation.y = mouse.current.x * 0.35 + state.clock.getElapsedTime() * 0.06;

    // Fetch window scroll depth
    const scrollY = window.scrollY || 0;
    const maxScroll = typeof window !== 'undefined' ? window.innerHeight : 800;
    const scrollRatio = Math.min(scrollY / maxScroll, 1.0);

    // Increase morph distortion and speed as user scrolls down
    if (materialRef.current) {
      materialRef.current.distort = 0.38 + scrollRatio * 0.32;
      materialRef.current.speed = 1.6 + scrollRatio * 1.4;
    }

    // Scale and translate the shape slightly down and away on scroll
    const scaleFactor = Math.max(1.8 - scrollRatio * 0.6, 1.2);
    meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    meshRef.current.position.y = -scrollRatio * 0.8;
  });

  return (
    <Float speed={2.0} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={meshRef} scale={1.8}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#c5a880" // Premium Satin Champagne Gold
          roughness={0.12}
          metalness={0.88}
          distort={0.38}
          speed={1.6}
          clearcoat={1.0}
          clearcoatRoughness={0.08}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full select-none pointer-events-none opacity-70 md:opacity-90">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.15} />
        
        {/* High-end photographic light setup */}
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#e5c583" />
        <pointLight position={[0, 8, 2]} intensity={1.2} color="#ffffff" />
        <pointLight position={[5, -5, 5]} intensity={1.4} color="#c5a880" />
        
        <WavingShape />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
