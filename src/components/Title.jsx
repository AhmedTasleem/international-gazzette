// // export default Title;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import for navigation
// import './Title.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const Title = () => {
//   const [theme, setTheme] = useState('light');
//   const [activeLink, setActiveLink] = useState(''); // Track active link for styling
//   const navigate = useNavigate(); // React Router's navigation hook

//   // Apply the theme to the body when it changes
//   useEffect(() => {
//     document.body.setAttribute('data-theme', theme);
//   }, [theme]);

//   // Toggle the theme between light and dark
//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//   };

//   // Scroll to the footer when "About" is clicked
//   const handleScrollToFooter = () => {
//     const footer = document.getElementById('footer'); // Footer element ID
//     if (footer) {
//       footer.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
//     }
//   };

//   // Handle active link and navigation
//   const handleLinkClick = (link) => {
//     setActiveLink(link);

//     if (link === 'home') {
//       navigate('/'); // Navigate to the Home page
//     } else {
//       handleScrollToFooter(); // Scroll to the footer for About, Feedback, or Contact Us
//     }

//     // Close the offcanvas menu
//     const offcanvasElement = document.getElementById('offcanvasLeft');
//     const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement); // Get the offcanvas instance
//     if (offcanvas) {
//       offcanvas.hide(); // Close the offcanvas
//     }
//   };

//   return (
//     <div>
//       {/* Title Bar */}
//       <div className="title-bar">
//         <h1 className="title-text">International Gazette</h1>
//         {/* Menu Icon with Offcanvas Trigger */}
//         <div
//           className="menu-icon"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasLeft"
//           aria-controls="offcanvasLeft"
//         >
//           &#9776;
//         </div>
//       </div>

//       {/* Offcanvas Content */}
//       <div
//         className="offcanvas offcanvas-start"
//         tabIndex="-1"
//         id="offcanvasLeft"
//         aria-labelledby="offcanvasLeftLabel"
//       >
//         <div className="offcanvas-header">
//           <h5 id="offcanvasLeftLabel">Menu</h5>
//           <button
//             type="button"
//             className="btn-close text-reset"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
//           {/* Menu Items */}
//           <ul>
//             <li>
//               <a
//                 href="#"
//                 className={activeLink === 'home' ? 'active' : ''}
//                 onClick={() => handleLinkClick('home')}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className={activeLink === 'about' ? 'active' : ''}
//                 onClick={(e) => {
//                   e.preventDefault(); // Prevent default link behavior
//                   handleLinkClick('about');
//                 }}
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className={activeLink === 'feedback' ? 'active' : ''}
//                 onClick={(e) => {
//                   e.preventDefault(); // Prevent default link behavior
//                   handleLinkClick('feedback');
//                 }}
//               >
//                 Feedback
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className={activeLink === 'contact' ? 'active' : ''}
//                 onClick={(e) => {
//                   e.preventDefault(); // Prevent default link behavior
//                   handleLinkClick('contact');
//                 }}
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>

//           {/* Theme Switcher */}
//           <div className="theme-switcher">
//             <label className="switch">
//               <input
//                 type="checkbox"
//                 onChange={toggleTheme}
//                 checked={theme === 'dark'}
//               />
//               <span className="slider round"></span>
//             </label>
//             <span>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Title;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import './Title.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Title = () => {
  const [theme, setTheme] = useState('light');
  const [activeLink, setActiveLink] = useState(''); // Track active link for styling
  const navigate = useNavigate(); // React Router's navigation hook

  // Apply the theme to the body when it changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Scroll to the footer when "About" is clicked
  const handleScrollToFooter = () => {
    const footer = document.getElementById('footer'); // Footer element ID
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }
  };

  // Handle active link and navigation
  const handleLinkClick = (link) => {
    setActiveLink(link);

    if (link === 'home') {
      navigate('/'); // Navigate to the Home page
    } else {
      handleScrollToFooter(); // Scroll to the footer for About, Feedback, or Contact Us
    }

    // Close the offcanvas menu
    const offcanvasElement = document.getElementById('offcanvasLeft');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement); // Get the offcanvas instance
    if (offcanvas) {
      offcanvas.hide(); // Close the offcanvas
    }
  };

  // Redirect to Home when Title is clicked
  const handleTitleClick = () => {
    navigate('/'); // Navigate to the Home page
  };

  return (
    <div>
      {/* Title Bar */}
      <div className="title-bar">
        <h1 className="title-text" onClick={handleTitleClick}>International Gazette</h1>
        {/* Menu Icon with Offcanvas Trigger */}
        <div
          className="menu-icon"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasLeft"
          aria-controls="offcanvasLeft"
        >
          &#9776;
        </div>
      </div>

      {/* Offcanvas Content */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasLeft"
        aria-labelledby="offcanvasLeftLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasLeftLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* Menu Items */}
          <ul>
            <li>
              <a
                href="#"
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === 'about' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleLinkClick('about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === 'feedback' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleLinkClick('feedback');
                }}
              >
                Feedback
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === 'contact' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleLinkClick('contact');
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Theme Switcher */}
          <div className="theme-switcher">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === 'dark'}
              />
              <span className="slider round"></span>
            </label>
            <span>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
