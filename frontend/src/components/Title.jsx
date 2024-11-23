// import React, {useState} from 'react';
// import './Title.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const Title = () => {
//   const [theme, setTheme] = useState('light'); // State to track the current theme

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.body.setAttribute('data-theme', newTheme); // Update the theme on the body
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
//         &#9776;
//         </div>
//       </div>

//       {/* Offcanvas Content */}
//       <div
//         className="offcanvas offcanvas-start" // Opens offcanvas from the left
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
//           {/* Offcanvas content can go here */}
//           <ul>
//             <li><a href="#about">About</a></li>
//             <li><a href="#feedback">Feedback</a></li>
//             <li><a href="#contact">Contact-Us</a></li>
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
import './Title.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Title = () => {
  const [theme, setTheme] = useState('light'); // State to track the current theme

  // Apply the theme to the body when it changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme); // Update the `data-theme` attribute on the body
  }, [theme]);

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div>
      {/* Title Bar */}
      <div className="title-bar">
        <h1 className="title-text">International Gazette</h1>
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
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#feedback">Feedback</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
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
