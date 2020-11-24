import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Navigation = () => {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="nav-container">
      <Link to="/" style={navStyle}>
        <h3>logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" style={navStyle}>
          <li>About us</li>
        </Link>
        <Link to="/recipes" style={navStyle}>
          <li>Recipes</li>
        </Link>
        <Link to="/contact" style={navStyle}>
          <li>Contact us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
