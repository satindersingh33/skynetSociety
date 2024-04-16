// BackButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back icon from react-icons/fa
import './Backicon.css'; // Import the CSS file for BackButton styles

function BackIcon() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="back-button" onClick={goBack}>
      <FaArrowLeft className="back-icon" /> {/* Render the back icon with a custom class */}
    </div>
  );
}

export default BackIcon;
