import "./App.css";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import Parent from "./Parent.jsx";
import { createContext, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import { GlobalValue } from "./GlobalContext.jsx";
import Login from "./Login.jsx";

function App() {
  const [val, setVal] = useState("Raj");

  return (
    <PrimeReactProvider>
      <GlobalValue.Provider value={val}>
        <div style={{ display: "flex" }}>
          <Sidebar></Sidebar>
          <Parent></Parent>
        </div>
        <Login />
      </GlobalValue.Provider>
    </PrimeReactProvider>
  );
}

export default App;
