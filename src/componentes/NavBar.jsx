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
      
      <div className="links-container">
        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
          Home
        </NavLink>
        <NavLink to="/categoria/electrodomestico" className={({ isActive }) => isActive ? "link active" : "link"}>
          Electrodomésticos
        </NavLink>
        <NavLink to="/categoria/electronica" className={({ isActive }) => isActive ? "link active" : "link"}>
          Electrónica
        </NavLink>
        <NavLink to="/categoria/muebleria" className={({ isActive }) => isActive ? "link active" : "link"}>
          Mueblería
        </NavLink>
        <NavLink to="/categoria/colchoneria" className={({ isActive }) => isActive ? "link active" : "link"}>
          Colchonería
        </NavLink>
      </div>
      
      <CartWidget />
    </nav>
  );
};

export default NavBar;
