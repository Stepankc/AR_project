import { ARCanvas, ARMarker } from "@artcom/react-three-arjs"
import {Canvas} from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import "./ui/normalize.scss";
import "./ui/reset.scss";

import { Provider } from "react-redux";
import { store } from "./store/store";

/** @deprecated */
import { RootView } from "./views/root.view";

const App: FunctionComponent = () => (
  <>
  <ARCanvas
    camera={ { position: [0, 0, 0] } }
    onCreated={ ( gl:any ) => {
      gl.setSize(window.innerWidth, window.innerHeight)
    } }>
    <ambientLight />
    <pointLight position={ [10, 10, 0] }  />
    <ARMarker
      type={ "pattern" }
      patternUrl={ "data/hiro.png" }>
      <mesh>
        <boxBufferGeometry args={ [1, 1, 1] } />
        <meshStandardMaterial color={ "green" } />
      </mesh>
    </ARMarker>
  </ARCanvas>,
  </>
);

export const AppCore: FunctionComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
