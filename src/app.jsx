import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import React from "react";
import "./ui/normalize.scss";
import "./ui/reset.scss";

import { Provider } from "react-redux";
import { store } from "./store/store";

// import { RootView } from "./views/root.view";

const App = () => (
  <>
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
      <ARMarker
        type={"pattern"}
        patternUrl={"data/hero.patt"}
        params={{ smooth: true }}
      >
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </ARMarker>
    </ARCanvas>
    ,
  </>
);

export const AppCore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
