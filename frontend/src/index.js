import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM for rendering
import App from './App'; // Import the main App component
import './index.css'; // Optional: Global styles

// Attach React to the root div in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
