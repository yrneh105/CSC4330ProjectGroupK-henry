// Navbar.js

import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="logo-container">
          <Logo />
        </div>
        <ul className="navbar-list">
        <li className="navbar-item"><a href="#">Home</a></li>
          <li className="navbar-item"><a href="#">Build</a></li> {/* Use Link component */}
          <li className="navbar-item"><a href="#">Components</a></li>
          <li className="navbar-item"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


