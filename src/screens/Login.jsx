import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  // const [uname, setUname] = useState("");
  // const [uname, setUname] = useState("");
  const res = useState("");
  const uname = res[0];
  const setUname = res[1];
  const [ErrorInfo, setErrorInfo] = useState("erroer info");
  const navigate = useNavigate();

  // setUname("hi");

  const notify = () => toast.error("make striong password");

  const handleUserName = (e) => {
    setUname(e.target.value);
  };

  const handleSubmit = () => {
    console.log("login Succesfull");
    toast.success("login Succesfull");

    const userData = {
      name: "Raj",
      email: "raj@example.com",
      language: "english",
    };

    setTimeout(() => {
      // navigate("/home", {
      //   state: userData,
      // });

      navigate(-1);
    }, 2000);
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
          // value={pass}
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
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
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
