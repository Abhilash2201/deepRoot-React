import "./App.css";
import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Counter from "./Counter.jsx";
import Cards from "./Cards.jsx";
import Parent from "./Parent.jsx";
import { createContext, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import { GlobalValue } from "./GlobalContext.jsx";

function App() {
  const [val, setVal] = useState("Raj");

  const products = [
    {
      brand: "Samsung",
      price: "2000",
    },
    {
      brand: "vivo",
      price: "2000",
    },
    {
      brand: "Samsung",
      price: "2000",
    },
    {
      brand: "Samsung",
      price: "2000",
    },
    {
      brand: "Samsung",
      price: "2000",
    },
    {
      brand: "Samsung",
      price: "2000",
    },
  ];

  {
    products.map((item) => {
      return <Card name={item.name} price={item.price} />;
    });
  }

  return (
    <PrimeReactProvider>
      <GlobalValue.Provider value={val}>
        <div style={{ display: "flex" }}>
          <Sidebar></Sidebar>
          <Parent></Parent>
        </div>
      </GlobalValue.Provider>
    </PrimeReactProvider>
  );
}

export default App;
