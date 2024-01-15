// Navbar.jsx
import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navContainer">
        <Link to="/home">
      <p>Home</p>
      </Link>
      <Link to="/contact">
      <p>Contact</p>
      </Link>
    </nav>
  );
};

export default Navbar;

