import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-header">
        <h2>About Us</h2>
        <h2>Contact</h2>
      </div>
      <div className="footer-content">
        <label htmlFor="footer-text">Leave us a Feedback:</label>
      </div>
        <textarea id="footer-text" rows="4" cols="50"></textarea>
        <button type="submit">Submit</button>
    </div>
    <p>&copy; 2024 International Gazette</p>
    </footer>
  );
}

export default Footer;
