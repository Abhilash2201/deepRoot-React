import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-end",
        gap: "25px",
        padding: "10px",
        background: "aqua",
        color: "black",
      }}
    >
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
export default NavBar;
