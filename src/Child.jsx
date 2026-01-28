import { useContext } from "react";
import { GlobalValue } from "./GlobalContext";

const Child = () => {
  const consumer = useContext(GlobalValue);
  console.log(consumer);

  return (
    <div style={{ border: "1px solid green" }}>
      <h1>Child name is {consumer}</h1>
    </div>
  );
};
export default Child;
