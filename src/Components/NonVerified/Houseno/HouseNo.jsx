import React from 'react';
import { useNavigate } from 'react-router-dom';
import HouseNumbers from './HousenoPurpose';
import "./house.css";
import BackIcon from '../../BackIcon/BackIcon';

function HouseNo({ isHindi }) {
  const navigate = useNavigate();

  const navigateToCameraPage = (item) => {
    const selectedTitle = isHindi ? item.titleHindi : item.title;

    localStorage.setItem('houseno', JSON.stringify(selectedTitle));

    console.log('houseno:', selectedTitle);

    setTimeout(() => {
      navigate('/camera');
    }, 0);
  };

  return (
    <div>
      <BackIcon/>
      <div className="titles-containerHouseNo">
        {HouseNumbers.map((item, index) => (
          <div
            key={index}
            className="title-boxHouseNo"
            onClick={() => navigateToCameraPage(item)}
          >
            <span className="title">{isHindi ? item.titleHindi : item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HouseNo;
