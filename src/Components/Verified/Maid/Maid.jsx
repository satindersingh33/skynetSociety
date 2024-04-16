import React from "react";
import axios from 'axios'; // Import Axios for making HTTP requests
import maidPurposes from "./maidpurpose";
import "./maid.css"; // Import CSS for styling
import BackIcon from "../../BackIcon/BackIcon";

const Maid = ({ isHindi }) => {

  const handleItemClick = async (item) => {
    try {
      const maidPurposeData = {
        maidPurpose: isHindi ? item.titleHindi : item.name
        // Customize maid purpose data based on language preference
      };
      
      // Store maid purpose data in localStorage (optional)
      localStorage.setItem('maidPurpose', JSON.stringify(maidPurposeData));
  
      // Send POST request to backend API
      const response = await axios.post('http://localhost:9000/verify', maidPurposeData);
  
      console.log('API response:', response.data);
      alert('Maid purpose data stored successfully');
    } catch (error) {
      console.error('Failed to store maid purpose data:', error);
      alert('Failed to store maid purpose data');
    }
  };

  return (
    <div>
      <BackIcon />
      <div className="titles-container">
        {maidPurposes.map((item, index) => (
          <div key={index} className="title-box" onClick={() => handleItemClick(item)}>
            <span className="title">{isHindi ? item.titleHindi : item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maid;
