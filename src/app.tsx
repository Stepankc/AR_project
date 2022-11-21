import React, { FunctionComponent } from "react";
import "./ui/normalize.scss";
import "./ui/reset.scss";

import { Provider } from "react-redux";
import { store } from "./store/store";

/**
 *  @deprecated
 *  Dont use
 *  import { RootView } from "./views/root.view";
 */

export const App: FunctionComponent = () => <>ar</>;

export const AppCore: FunctionComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
