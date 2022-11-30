import { ARCanvas } from "@artcom/react-three-arjs";
import React from "react";
import "./ui/reset.scss";
import { Dino } from "./models/Dino";
import { Knight } from "./models/Knight"

import { Provider } from "react-redux";
import { store } from "./store/store";

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
    <ambientLight />
    <pointLight position={[10, 10, 0]} intensity={10.0} />
    <Dino />
    <Knight />
  </ARCanvas>
);

export const AppCore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
