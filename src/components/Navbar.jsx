import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-end",
        gap: "25px",
        padding: "10px",
        background: "#a091917d",
        color: "black",
      }}
    >
      {/* <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "isActive" : "")}
        >
          Home
        </NavLink>
      </div> */}
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "isActive" : "")}
          to="/about"
        >
          About
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "isActive" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "isActive" : "")}
          to="/product"
        >
          Products
        </NavLink>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
export default NavBar;
