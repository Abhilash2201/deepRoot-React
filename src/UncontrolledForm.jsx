import { useRef, useState } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [ErrorInfo, setErrorInfo] = useState("error info");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(passwordRef.current.value);
        const pass = passwordRef.current.value;
        if (pass.length < 5) {
          setErrorInfo("Password is too short");
        } else if (pass.length > 6) {
          setErrorInfo("Password is too long");
        }
      }}
    >
      <label htmlFor="username">Name: </label>
      <input
        type="text"
        name="name"
        id="username"
        ref={nameRef}
        value={"raju"}
      />
      <br />
      <br />
      <br />
      <label htmlFor="password">password: </label>
      <input
        type="text"
        name="password"
        id="password"
        ref={passwordRef}
        value={"pass"}
      />
      <section style={{ color: "red" }}> {ErrorInfo}</section>
      <br />
      <br />
      <br />
      <button type="reset">Cancel</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
