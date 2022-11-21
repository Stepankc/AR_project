import React, { FunctionComponent } from "react";
import "./ui/normalize.scss";
import "./ui/reset.scss";

import { Provider } from "react-redux";
import { store } from "./store/store";

/** @deprecated */
import { RootView } from "./views/root.view";

const App: FunctionComponent = () => <>ar</>;

export const AppCore: FunctionComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
