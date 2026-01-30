import { useRef, useState } from "react";

const RenderTest = () => {
  const [count, setCount] = useState(500);

  //   console.log(count + 1);

  const refCount = useRef(500);

  console.log(console.log(refCount));

  // java
  return (
    <>
      <p>State Count: {count}</p>

      <p>Ref Count: {refCount.current}</p>

      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment State
        </button>

        <button
          onClick={() => {
            refCount.current = refCount.current + 1;
          }}
        >
          Increment Ref
        </button>
      </div>
    </>
  );
};
export default RenderTest;
