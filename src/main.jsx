import { StrictMode } from "react"; // module(file)  // multiple named
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; //default

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {App()}
  </StrictMode>
);
