import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { ARMarker } from "@artcom/react-three-arjs";

const CoolerModel = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/cooler/cooler.gltf')
  const { actions } = useAnimations(animations, group)

  const [animation, setAnimation] = useState(false)

  const eventHandler = () => {
    if (!animation) {
      actions.coolervert.reset().fadeIn(0.5).play()
      setAnimation(true)
    }
    else {
      actions.coolervert.fadeOut(0.9).stop()
      setAnimation(false)
    }
  }

  return (
    <mesh ref={group} onClick={eventHandler} scale={0.5} {...props} dispose={null}>
      <group>
        <group name="Scene">
          <group name="Sketchfab_model" position={[0, 0.9, 0.15]}>
            <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Box001" position={[0, -0.04, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            </group>
          </group>
          <group name="Sketchfab_model001" position={[0, 0.9, -0.04]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="actions">
                  <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="anim">
                  <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root.001']} />
                </group>
                <group name="anim2">
                  <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Scene_-_Root.002']} />
                </group>
                <group name="anim3">
                  <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root.003']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </mesh>
  )
}

export const Cooler = () => (
  <ARMarker
    type={"pattern"}
    patternUrl={"data/Cube/pattern.patt"}
    params={{ smooth: true }}
  >
    <CoolerModel />
  </ARMarker>
);

useGLTF.preload('models/cooler/cooler.gltf')
