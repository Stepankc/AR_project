import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppCore } from "./app";

createRoot(document.querySelector("#app")).render(
  <StrictMode children={<AppCore />} />
);
