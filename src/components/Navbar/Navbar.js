import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navStyle">
      <Link to="/" className="navbar-brand">
        <span className="heading">RadicalStart Task</span>
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#mainMenu" 
        aria-controls="mainMenu" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mainMenu">
        <ul className="navbar-nav ms-auto navList">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link" activeClassName="active">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
