import React from 'react';
import { useNavigate } from 'react-router-dom';
import GuestPurpose from './GuestPuropse';
import './Guest.css';
import BackIcon from '../../BackIcon/BackIcon';

function Guest({ isHindi }) {
  const navigate = useNavigate();

  const navigateToHouseNumberPage = (selectedItem) => {
    // Extract the title property from the selected item
    const selectedTitle = isHindi ? selectedItem.titleHindi : selectedItem.title;

    // Store the selected title in localStorage
    localStorage.setItem('purpose', JSON.stringify(selectedTitle));

    // Log the stored title to the console for verification
    console.log('Guest purpose:', selectedTitle);

    // Navigate to the house number page
    navigate("/house");
  };

  return (
    <div>
      <div className='Backicon'>
        <BackIcon />
      </div>
      <div className="titles-containerGuest">
        {GuestPurpose.map((item, index) => (
          <div
            key={index}
            className="title-boxGuest"
            onClick={() => navigateToHouseNumberPage(item)}
          >
            <span className="title">{isHindi ? item.titleHindi : item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guest;
