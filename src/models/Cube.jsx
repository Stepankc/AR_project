import React, { useRef } from "react";
import { ARMarker } from "@artcom/react-three-arjs";
import { useGLTF } from "@react-three/drei";

const CubeModel = () => {
  const cube = useRef()
  const eventHandler = (event) => {
    console.log(event)
    cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
  }

  return (
    <mesh
      ref={cube}
      onClick={eventHandler}
    >
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
};

export const Cube = () => (
  <ARMarker
    type={"pattern"}
    patternUrl={"data/knight/pattern.patt"}
    params={{ smooth: true }}
  >
    <CubeModel />
  </ARMarker>
);

useGLTF.preload("models/knight/knight.gltf");
