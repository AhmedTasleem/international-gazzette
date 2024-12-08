// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/category/entertainment">Entertainment</Link></li>
        <li className="navbar-item"><Link to="/category/sports">Sports</Link></li>
        <li className="navbar-item"><Link to="/category/business">Business</Link></li>
        <li className="navbar-item"><Link to="/category/technology">Technology</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
