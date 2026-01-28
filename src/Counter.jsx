import { useState } from "react";
import Preview from "./Preview";

const Counter = () => {
  // statless componnent
  // hooks===>function attached with lifecycle methods
  // they became the stateful component
  // lifecycle methods of react
  // hooks are introduced in 16.8   - 2019

  const [num, setNum] = useState(0);

  const decrement = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
          id="one"
        >
          increment
        </button>
        {/* <h1>{num}</h1> */}
        <Preview value={num} setValue={setNum} />
        <button id="two" onClick={decrement}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
