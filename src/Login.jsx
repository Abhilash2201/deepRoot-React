import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [ErrorInfo, setErrorInfo] = useState("erroer info");
  console.log("rendred");

  // setUname("hi");

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

            if (e.target.value.length < 5 && e.target.value.length > 1) {
              setErrorInfo("password is too short");
            } else if (e.target.value.length > 5) {
              setErrorInfo("password is too long");
            } else {
              setErrorInfo("Error Info");
            }
          }}
        />
      </section>
      <section style={{ color: "red" }}> {ErrorInfo}</section>
      <br></br>
      <section style={{ display: "flex", gap: "8px", padding: "10px" }}>
        <button
          onClick={() => {
            setPass("");
            setUname("");
          }}
        >
          Cancel
        </button>
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
