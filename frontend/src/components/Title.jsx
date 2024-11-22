import React from 'react';
import './Title.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Title = () => {
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
        className="offcanvas offcanvas-start" // Opens offcanvas from the left
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
          {/* Offcanvas content can go here */}
          <ul>
            <li><a href="#home">About</a></li>
            <li><a href="#about">Feedback</a></li>
            <li><a href="#contact">Contact-Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Title;
