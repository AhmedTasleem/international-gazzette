// // export default Footer;
// import React, { useState } from "react";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="footer" id="footer">
//       <div className="footer-container">
//         {/* Footer Header */}
//         <div className="footer-header">
//           <div className="footer-about">
//             <h2>About Us</h2>
//             <p>
//               The International Gazette is your trusted source for global news,
//               delivering accurate and timely updates on current events.
//             </p>
//           </div>
//           <div className="footer-contact">
//             <h2>Contact</h2>
//             <p>Email: contact@internationalgazette.com</p>
//             <p>Phone: +1 234 567 890</p>
//           </div>
//         </div>

//         {/* Google Form Embed */}
//         <div className="footer-feedback">
//           <label htmlFor="footer-text" className="feedback-label">
//             Leave us a Feedback:
//           </label>
//           {/* Embed Google Form */}
//           <iframe
//             src="https://docs.google.com/forms/d/e/1FAIpQLSfkOgt1KThMMwGzhbGg5u2-Tl-Xbznq3t0-m26I5pwrRQbesA/viewform?embedded=true"
//             width="640"
//             height="406"
//             frameBorder="0"
//             marginHeight="0"
//             marginWidth="0"
//           >
//             Loading…
//           </iframe>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="footer-bottom">
//         <p>&copy; 2024 International Gazette. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import "./Footer.css";

function Footer() {
  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
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

        {/* Google Form Embed */}
        <div className="footer-feedback">
          <label htmlFor="footer-text" className="feedback-label">
            Leave us a Feedback:
          </label>
          {/* Embed Google Form */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfkOgt1KThMMwGzhbGg5u2-Tl-Xbznq3t0-m26I5pwrRQbesA/viewform?embedded=true"
            width="640"
            height="406"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 International Gazette. All rights reserved.</p>
      </div>

      {/* Upward Arrow Button */}
      <button 
        className="upward-arrow-btn" 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
