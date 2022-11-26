import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Link to="/" className="header-logo">
        <h1>CATS</h1>
      </Link>
      <Link to="/" className="menu-item">Home</Link>
      <Link to="/" className="menu-item">About us</Link>
    </div>
  );
};

export default Header;
