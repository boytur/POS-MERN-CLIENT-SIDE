// main.jsx
import React from "react";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
