// import React from 'react';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         <li className="navbar-item"><a href="/">Entertainment</a></li>
//         <li className="navbar-item"><a href="/">Sports</a></li>
//         <li className="navbar-item"><a href="/">Education</a></li>
//         <li className="navbar-item"><a href="/">Business</a></li>
//         <li className="navbar-item"><a href="/">Lifestyle</a></li>
//         <li className="navbar-item"><a href="/">Technology</a></li>
//       </ul>
//     </nav>
//   );
// }

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
        <li className="navbar-item"><Link to="/category/education">Education</Link></li>
        <li className="navbar-item"><Link to="/category/business">Business</Link></li>
        <li className="navbar-item"><Link to="/category/lifestyle">Lifestyle</Link></li>
        <li className="navbar-item"><Link to="/category/technology">Technology</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
