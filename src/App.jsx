import "./App.css";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import Parent from "./Parent.jsx";
import { createContext, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import { GlobalValue } from "./GlobalContext.jsx";
import Login from "./screens/Login.jsx";
import RenderTest from "./CustomRef.jsx";
import UncontrolledForm from "./UncontrolledForm.jsx";
import LifeCycleDemo from "./LifeCycleDemo.jsx";
import ResizeComponent from "./UnmountExample.jsx";
import NavBar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./screens/About.jsx";
import Contact from "./screens/Contact.jsx";

function App() {
  const [val, setVal] = useState("Raj");
  const [show, setShow] = useState(true);

  return (
    <PrimeReactProvider>
      <GlobalValue.Provider value={val}>
        {/* <button onClick={() => setShow(!show)}>Toggle Component</button>
        {show && <ResizeComponent />} */}
      </GlobalValue.Provider>
    </PrimeReactProvider>
  );
}

export default App;
