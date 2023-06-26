import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = React.useState(true);

  <div className="header">
    <h1>Job Website</h1>
    <nav className="navbar">
      <NavLink exact to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-link" activeClassName="active">
        Contact
      </NavLink>
    </nav>
    <button className="button-primary"
      onClick={() => setIsNavbarVisible(!isNavbarVisible)}
      >
      {isNavbarVisible ? "Hide Navbar" : "Show Navbar"}

     </button>
  </div>;
}

export default Header;
