import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/Reset.css";
import "./index.css";
import App from "./App.jsx";

/**
 * Render the App component to the DOM
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
