import React from "react";
import "./ui/reset.scss";

import { ARCanvas } from "@artcom/react-three-arjs";
import { Dino, Cube, Cooler } from "@models/export";

import { Provider } from "react-redux";
import { store } from "@store/store";
import { Perf } from "r3f-perf";
import { events } from "@react-three/fiber"

const eventManagerFactory = state => ({
  ...events(state),

  compute(event, state) {
    state.pointer.set(
      (event.clientX / state.size.width) * 2 - 1,
      -(event.clientY / state.size.height) * 2 + 1,
    )
    state.raycaster.setFromCamera(state.pointer, state.camera)
  },
})

const App = () => (
  <ARCanvas
    gl={{
      antialias: false,
      powerPreference: "default",
      physicallyCorrectLights: true,
    }}
    onCameraStreamReady={() => console.log("Camera stream ready")}
    onCameraStreamError={() => console.error("Camera stream error")}
    onCreated={({ gl }) => {
      gl.setSize(window.innerWidth, window.innerHeight);
    }}
    events={eventManagerFactory}
    onPointerMissed={(e) => console.log(e, 'missed')}
  >
    <Perf position="top-left" />
    <directionalLight castShadow position={[1, 2, 3]} />
    <ambientLight intensity={1.5} />
    <Dino />
    {/* <Cube /> */}
    <Cooler />
  </ARCanvas>
);

export const AppCore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
