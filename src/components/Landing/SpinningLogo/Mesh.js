import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { ThreeMFLoader } from "three-stdlib";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei/core/useGLTF";

const Mesh = ({ position, args, color }) => {
  const mesh = useRef(null);
  //const logo = useGLTF("src/components/Landing/SpinningLogo/armchairGray.gltf");
  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Mesh;

{
  /*<mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
  </mesh>
  
  
  <Suspense fallback={null}>
      <primitive object={logo} />
    </Suspense>*/
}
