import { StrictMode } from "react"; // module(file)  // multiple named
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; //default
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Login from "./Login.jsx";
import NavBar from "./Navbar.jsx";
// import "primeicons/primeicons.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    ,
  </>,
  // <App></App>,
  // </StrictMode>,
);
