import CartWidget from "./CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">

      <NavLink to="/" className="logo-container">
        <span className="logo-top">CODER</span>
        <span className="logo-bottom">HOGAR</span>
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
          Home
        </NavLink>
        <NavLink to="/category/electrodomestico" className={({ isActive }) => isActive ? "link active" : "link"}>
          Electrodomésticos
        </NavLink>
        <NavLink to="/category/electronica" className={({ isActive }) => isActive ? "link active" : "link"}>
          Electrónica
        </NavLink>
        <NavLink to="/category/muebleria" className={({ isActive }) => isActive ? "link active" : "link"}>
          Mueblería
        </NavLink>
        <NavLink to="/category/colchoneria" className={({ isActive }) => isActive ? "link active" : "link"}>
          Colchonería
        </NavLink>
      </div>

      <div className="navbar-cart">
        <CartWidget />
      </div>

    </nav>
  );
};

export default NavBar;
