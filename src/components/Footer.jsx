// import React, { useState } from 'react';
// import "./Footer.css";

// function Footer() {
//   const [feedback, setFeedback] = useState("");

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent page reload on submit
//     console.log("Feedback Submitted: ", feedback); // Log feedback to console
//     setFeedback(""); // Clear the feedback textarea after submission
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-header">
//           <h2>About Us</h2>
//           <h2>Contact</h2>
//         </div>
//         <div className="footer-content">
//           <label htmlFor="footer-text">Leave us a Feedback:</label>
//         </div>
//         <textarea
//           id="footer-text"
//           rows="4"
//           cols="50"
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)} // Update state with textarea value
//         />
//         <button type="submit" onClick={handleSubmit}>Submit</button>
//       </div>
//       <p>&copy; 2024 International Gazette</p>
//     </footer>
//   );
// }

// export default Footer;

import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on submit
    console.log("Feedback Submitted: ", feedback); // Log feedback to console

    if (feedback.trim()) {
      setIsSubmitted(true); // Set submission success message
      setTimeout(() => setIsSubmitted(false), 3000); // Remove success message after 3 seconds
    }

    setFeedback(""); // Clear the feedback textarea after submission
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Footer Header */}
        <div className="footer-header">
          <div className="footer-about">
            <h2>About Us</h2>
            <p>
              The International Gazette is your trusted source for global news,
              delivering accurate and timely updates on current events.
            </p>
          </div>
          <div className="footer-contact">
            <h2>Contact</h2>
            <p>Email: contact@internationalgazette.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="footer-feedback">
          <label htmlFor="footer-text" className="feedback-label">
            Leave us a Feedback:
          </label>
          <textarea
            id="footer-text"
            rows="4"
            cols="50"
            value={feedback}
            placeholder="Write your feedback here..."
            onChange={(e) => setFeedback(e.target.value)} // Update state with textarea value
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          {isSubmitted && (
            <p className="success-message">Thank you for your feedback!</p>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 International Gazette. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
