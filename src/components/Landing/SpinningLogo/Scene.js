import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei/core/useGLTF";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas shadows colorManagement camera={{ position: [0, 0, 6.75], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <directionalLight
        // castShadow
        position={[0, 5, 0]}
        intensity={0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[10, 0, 0]} intensity={1000} />
      <pointLight position={[0, 0, 10]} intensity={1000} />
      {/* <pointLight position={[0, -10, 0]} intensity={1.5} /> */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
  // return (
  //   <div style={{ height: "100%", width: "100%" }}>
  //     <Canvas
  //       //shadows
  //       colorManagement
  //       camera={{ position: [-6, 1, 0] }}
  //       //camera={{ position: [-5, 2, 10], fov: 60 }}
  //     >
  //       <ambientLight intensity={0.3} />
  //       <directionalLight
  //         castShadow
  //         position={[0, 10, 0]}
  //         intensity={1.5}
  //         shadow-mapSize-width={1024}
  //         shadow-mapSize-height={1024}
  //         shadow-camera-far={50}
  //         shadow-camera-left={-10}
  //         shadow-camera-right={10}
  //         shadow-camera-top={10}
  //         shadow-camera-bottom={-10}
  //       />
  //       <pointLight position={[-10, 0, -20]} intensity={0.5} />
  //       <pointLight position={[0, -10, 0]} intensity={1.5} />
  //       {/* <Suspense fallback={null}> */}
  //       <LogoModel />
  //       {/* </Suspense> */}
  //     </Canvas>
  //   </div>
  // );
};

export default Scene;
