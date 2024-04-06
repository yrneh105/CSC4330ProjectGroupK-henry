// SignInModal.js

import React from 'react';

const SignInModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>X</button>
        <h2>Sign In</h2>
        {/* Your sign-in form content */}
        <form>
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;

