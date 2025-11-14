import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />

      {/* Simple 3D cube */}
      <mesh rotation={[0.4, 0.2, 0.2]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}
