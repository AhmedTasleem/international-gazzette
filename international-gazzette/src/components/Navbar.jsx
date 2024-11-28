import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/">Entertainment</a></li>
        <li className="navbar-item"><a href="/">Sports</a></li>
        <li className="navbar-item"><a href="/">Education</a></li>
        <li className="navbar-item"><a href="/">Business</a></li>
        <li className="navbar-item"><a href="/">Lifestyle</a></li>
        <li className="navbar-item"><a href="/">Technology</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;