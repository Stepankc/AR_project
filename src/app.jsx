import React from "react";
import "./ui/reset.scss";

import { ARCanvas } from "@artcom/react-three-arjs";
import { Dino, Knight } from "./models/export";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { Perf } from "r3f-perf";

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
  >
    <Perf position="top-left"/>
    <directionalLight castShadow position={[1,2,3]} />
    <ambientLight intensity={1.5} />
    <Dino />
    <Knight />
  </ARCanvas>
);

export const AppCore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
