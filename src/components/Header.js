import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Kazi Pro</h1>
        </div>

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
      
      <section className="home-section">
        <h1>Welcome to our Job Website</h1>
        <p>Find your dream job today</p>
      </section>
    </div>
  );
}

export default Header;
