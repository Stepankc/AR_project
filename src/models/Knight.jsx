import React, { useRef, useEffect } from "react";
import { ARMarker } from "@artcom/react-three-arjs";
import { useGLTF, useAnimations } from "@react-three/drei";

const KnightModel = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/knight/knight.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    actions.Idle.play();
  });

  return (
    <mesh onClick={() => actions.SwordAndShieldDeath_2.play()}>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            position={[0, -0.01, -0.22]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.73}
          >
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Footman_rig_69" position={[0, 0, 0.04]}>
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="arm_strap_bottom_55" />
                    <group name="arm_strap_top_56" />
                    <group name="belt_57" />
                    <group name="chest_58" />
                    <group name="cross_59" />
                    <group name="cylt_60" />
                    <group name="cylt_sides_61" />
                    <group name="eyes_Sphere_62" />
                    <group name="head_merged_63" />
                    <group name="helmet_64" />
                    <group name="shield_65" />
                    <group name="shoulder_pads_66" />
                    <group name="tail_67" />
                    <group name="thigh_plate_68" />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.Armor_2}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.Armor_2}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials["Armor_2.001"]}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.Metal}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials["Armor_2.001"]}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials["Armor_2.001"]}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials.Armor_2}
                      skeleton={nodes.Object_19.skeleton}
                    />
                    <skinnedMesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials.body}
                      skeleton={nodes.Object_21.skeleton}
                    />
                    <skinnedMesh
                      name="Object_23"
                      geometry={nodes.Object_23.geometry}
                      material={materials["body.001"]}
                      skeleton={nodes.Object_23.skeleton}
                    />
                    <skinnedMesh
                      name="Object_25"
                      geometry={nodes.Object_25.geometry}
                      material={materials.Metal}
                      skeleton={nodes.Object_25.skeleton}
                    />
                    <skinnedMesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials["Armor_2.001"]}
                      skeleton={nodes.Object_27.skeleton}
                    />
                    <skinnedMesh
                      name="Object_29"
                      geometry={nodes.Object_29.geometry}
                      material={materials.Metal}
                      skeleton={nodes.Object_29.skeleton}
                    />
                    <skinnedMesh
                      name="Object_31"
                      geometry={nodes.Object_31.geometry}
                      material={materials["Armor_2.001"]}
                      skeleton={nodes.Object_31.skeleton}
                    />
                    <skinnedMesh
                      name="Object_33"
                      geometry={nodes.Object_33.geometry}
                      material={materials.Metal}
                      skeleton={nodes.Object_33.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </mesh>
  );
};

export const Knight = () => (
  <ARMarker
    type={"pattern"}
    patternUrl={"data/knight/pattern.patt"}
    params={{ smooth: true }}
  >
    <KnightModel />
  </ARMarker>
);

useGLTF.preload("models/knight/knight.gltf");
