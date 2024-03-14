import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage'; // Import your main App component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HomePage /> {/* Render your main App component */}
  </React.StrictMode>,
  document.getElementById('root') // Render into the root element in your HTML
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

