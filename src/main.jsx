import { StrictMode } from "react"; // module(file)  // multiple named
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; //default
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./screens/About.jsx";
import Contact from "./screens/Contact.jsx";
import Login from "./screens/Login.jsx";
import Products from "./screens/Products.jsx";
import NavBar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import ProductDetails from "./screens/ProductDetails.jsx";
// import "primeicons/primeicons.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    ,
  </>,
  // <App></App>,
  // </StrictMode>,
);
