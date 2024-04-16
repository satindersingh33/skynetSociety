import React from 'react';
import { useNavigate } from 'react-router-dom';
import RelativePurpose from './relativePurpose';
import './relative.css';
import BackIcon from '../../BackIcon/BackIcon';

function Relative({ isHindi }) {
  const navigate = useNavigate();

  const navigateToHouseNumberPage = (item) => {
    // Extract the title property from the selected item
    const selectedTitle = isHindi ? item.titleHindi : item.title;

    // Log the selected item to see its structure
    console.log('Selected Item:', item);

    // Store the selected title in localStorage
    localStorage.setItem('relative', JSON.stringify(selectedTitle));

    // Navigate to the house number page ("/house")
    navigate('/house');
  };

  return (
    <div>
      <BackIcon />
      <div className="titles-containerfriend">
        {RelativePurpose.map((item, index) => (
          <div
            key={index}
            className="title-boxfriend"
            onClick={() => navigateToHouseNumberPage(item)}
          >
            <span className="title">{isHindi ? item.titleHindi : item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Relative;
