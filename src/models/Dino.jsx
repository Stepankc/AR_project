import React from "react";
import { ARMarker } from "@artcom/react-three-arjs";
import { useGLTF } from "@react-three/drei";

const DinoModel = () => {
  const { nodes, materials } = useGLTF("models/dino/dino.gltf");
  return (
    <group scale={0.5} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="_0">
          <mesh
            name="mesh_0"
            geometry={nodes.mesh_0.geometry}
            material={materials.mesh_0}
            morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
            morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
};

export const Dino = () => (
  <ARMarker
    type={"pattern"}
    patternUrl={"data/dino/pattern.patt"}
    params={{ smooth: true }}
  >
    <DinoModel />
  </ARMarker>
);

useGLTF.preload("models/dino/dino.gltf");
