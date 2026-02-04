import { useEffect, useState } from "react";

const LifeCycleDemo = () => {
  const [count, setCount] = useState(0);
  const [notCount, setNotCount] = useState(10);
  // mounting
  // updtating
  // Unmounting
  //   console.log(count);

  const fetchData = (itemId) => {
    fetch(`https://dummyjson.com/carts/${itemId}`)
      .then((res) => res.json())
      .then(console.log);
  };

  useEffect(() => {
    fetchData(itemId);
  }, [itemId]);

  useEffect(() => {
    console.log("component updated");
  }, [notCount]);

  //   useEffect(() => {
  //     return () => {
  //       console.log("component unmounted");
  //     };
  //   }, [notCount]);

  return (
    <>
      <h1>LifeCycleDemo Component</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          plus
        </button>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          minus
        </button>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => {
            setNotCount(notCount + 1);
          }}
        >
          plus
        </button>
        <h2>Not Count: {notCount}</h2>
        <button
          onClick={() => {
            setNotCount(notCount - 1);
          }}
        >
          minus
        </button>
      </div>
    </>
  );
  ``;
};
export default LifeCycleDemo;
