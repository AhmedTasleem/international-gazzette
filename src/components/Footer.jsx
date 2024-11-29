import React, { useState } from 'react';
import "./Footer.css";

function Footer() {
  const [feedback, setFeedback] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on submit
    console.log("Feedback Submitted: ", feedback); // Log feedback to console
    setFeedback(""); // Clear the feedback textarea after submission
  };

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
        <textarea
          id="footer-text"
          rows="4"
          cols="50"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)} // Update state with textarea value
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
      <p>&copy; 2024 International Gazette</p>
    </footer>
  );
}

export default Footer;
