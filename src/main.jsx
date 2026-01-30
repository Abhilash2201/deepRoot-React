import { StrictMode } from "react"; // module(file)  // multiple named
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; //default
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* {App()} */}
    {<App />}
    {/* <App></App> */}
  </StrictMode>,
);
