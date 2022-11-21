import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppCore } from "./app";
import "./webvitals";

createRoot(document.querySelector("#app")).render(
  <StrictMode children={<AppCore />} />
);
