import React from 'react';
import { useNavigate } from 'react-router-dom';
import FriendsPurpose from './Friendspurpose';
import './friends.css';
import BackIcon from '../../BackIcon/BackIcon';

function Friends({ isHindi }) {
  const navigate = useNavigate();

  const navigateToHouseNumberPage = (selectedItem) => {
    // Extract the title property from the selected item
    const selectedTitle = isHindi ? selectedItem.titleHindi : selectedItem.title;

    // Log the selected title to the console for verification
    console.log('Selected Friend Title:', selectedTitle);

    // Store the selected title in localStorage
    localStorage.setItem('selectedFriend', JSON.stringify(selectedTitle));

    // Navigate to the house number page ("/house")
    navigate('/house');
  };

  return (
    <div>
      <BackIcon />
      <div className="titles-containerfriend">
        {FriendsPurpose.map((item, index) => (
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

export default Friends;
