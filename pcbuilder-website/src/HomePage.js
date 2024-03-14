// HomePage.js

import React from 'react';
import './HomePage.css';
import Navbar from './NavBar'; // Import Navbar component
import SignInButton from './SignInButton';

function HomePage() {
  // Function to handle clicks on the buttons
  const handleButtonClick = (option) => {
    console.log(`Clicked on ${option}`);
    // Perform any actions here based on the button clicked
  };

  return (
    <div className="HomePage">
      <div className="top-bar">
        <Navbar />
      </div>
      <div className="sign-in-wrapper"> {/* Wrap the sign-in button */}
        <div className="sign-in">
          <SignInButton />
        </div>
      </div>
      <div className="centered-boxes">
        <button className="box" onClick={() => handleButtonClick('PreBuilt')}>
          PreBuilt
        </button>
        <button className="box" onClick={() => handleButtonClick('Guided Build')}>
          Guided Build
        </button>
        <button className="box" onClick={() => handleButtonClick('Component Shop')}>
          Component Shop
        </button>
      </div>
      <div className="bottom-section">
        <button className="bottom-box top-rated" onClick={() => handleButtonClick('Top Rated Builds')}>
          Top Rated Builds
        </button>
        <button className="bottom-box latest-builds" onClick={() => handleButtonClick('Latest Builds')}>
          Latest Builds
        </button>
        <div className="empty-box"></div>
        <div className="empty-box"></div>
        <div className="empty-box"></div>
      </div>
    </div>
  );
}

export default HomePage;
