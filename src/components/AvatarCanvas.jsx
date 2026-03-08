// src/components/AvatarCanvas.jsx
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const AvatarModel = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/avatar.glb");
  useFrame(() => {
    group.current.rotation.y += 0.003;
  });

  return <primitive object={scene} ref={group} scale={1.5} />;
};

const AvatarCanvas = () => {
  return (
    <div className="avatar-canvas">
      <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
        <ambientLight intensity={1} />
        <Environment preset="sunset" />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default AvatarCanvas;
