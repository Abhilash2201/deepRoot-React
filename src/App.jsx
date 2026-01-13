import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const arr = [12, 34, 45];
  console.log(arr);
  // const num1 = arr[0];
  // const num2 = arr[1];
  // const num3 = arr[2];

  const [num1, num2, num3, num4] = arr; //destructuring
  console.log(num1);
  console.log(num2);

  // console.log(...arr);

  // console.log(num2);

  const std = {
    name: "John",
    age: 22,
    course: "MERN",
  };

  // const name = std.name;

  const { name } = std; //destructuring

  console.log(name);

  const fiv1 = document.createElement("div");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        {/* count is {count} */}
        {/* </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Clickssss on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
