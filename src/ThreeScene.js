import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

export function TVModel() {
  const model = useGLTF("/Models/tv.glb");
  return (
    <primitive
      object={model.scene}
      position={[25, 0, -3]}  // X, Y, Z
      //rotation={[0, Math.PI / 4, 0]} // rotate 45° on Y axis
      scale={1.5}  // make it bigger or smaller
      
    />
  );
}

loader.load("/models/tv.glb", (gltf) => {
  const tv = gltf.scene;

  tv.traverse((child) => {
    if (child.isMesh && child.name.toLowerCase().includes("floor")) {
      child.visible = false;   // hide it
    }
  });

  scene.add(tv);
});



export default function ThreeScene() {
  return (
    <div className="canvas-background">
      <Canvas
        camera={{ position: [0, 20, 50] }}  // locked camera position
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />

        <TVModel />
      </Canvas>
    </div>
  );
}

