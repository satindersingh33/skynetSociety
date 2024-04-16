// Delivey.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './delivery.css';
import BackIcon from '../../BackIcon/BackIcon';

function Delivery() {
  const navigate = useNavigate();

  const navigateToHouseNumberPage = () => {
    navigate("/house");
  };

  return (
    <div>
      <BackIcon/>
      {/* <h1>Delivey Page</h1> */}
      <div className="titles-containerDelivey">
        
          <div
            className="title-boxDelivey"
            onClick={() => navigateToHouseNumberPage()}
          >
          </div>
    
      </div>
    </div>
  );
}

export default Delivery;
