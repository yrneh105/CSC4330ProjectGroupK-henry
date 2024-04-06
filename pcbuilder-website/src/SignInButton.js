// SignInButton.js

import React, { useState } from 'react';
import SignInModal from './SignInModal';

const SignInButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="sign-in-button">
      <button onClick={openModal}>Sign In</button>
      {showModal && <SignInModal onClose={closeModal} />}
    </div>
  );
};

export default SignInButton;




