import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <Link to="/">
          <img src={logo} alt="Starbucks Logo" />
        </Link>
      </div>
      <div className="right-side">
        <div className="nav-link-wrapper">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link-wrapper">
          <Link to="/menu">Menu</Link>
        </div>
        <div className="nav-link-wrapper">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
