import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");

  const notify = () => toast.error("make striong password");

  const handleUserName = (e) => {
    setUname(e.target.value);
  };

  return (
    <div style={{ border: "1px solid", marginTop: "15px" }}>
      <section style={{ padding: "10px", background: "red" }}>
        <label htmlFor="userName">UserName : </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={uname}
          //   onChange={(e) => {
          //     setUname(e.target.value);
          //   }}

          //   onChange={(e) => {
          //     handleUserName(e);
          //   }}

          onChange={handleUserName}
        />
      </section>
      <section style={{ padding: "10px" }}>
        <label htmlFor="password">password : </label>
        <input
          type="text"
          name="password"
          id="password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </section>
      <section style={{ display: "flex", gap: "8px", padding: "10px" }}>
        <button>Cancel</button>
        <button
          onClick={() => {
            notify();
          }}
        >
          Submit
        </button>
      </section>

      <ToastContainer position="top-left" />
    </div>
  );
};
export default Login;
