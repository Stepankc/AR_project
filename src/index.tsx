import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./webvitals";

createRoot(document.querySelector("#app")).render(
  <StrictMode children={<App />} />
);
