import React from "react";
import { Canvas } from "@react-three/fiber";
import LogoMesh from "./Mesh";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei/core/useGLTF";

// import { softShadows } from "@react-three/drei";
// softShadows();

const Scene = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Canvas
        //shadows
        colorManagement
        camera={{ position: [-6, 1, 0] }}
        //camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <Suspense fallback={null}>
          <LogoMesh position={[0, 1, 0]} args={[3, 2, 1]} color="white" />
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload("/armchairGray.gltf");

export default Scene;
