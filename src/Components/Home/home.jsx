import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import userData from '../data'; // Import userData containing title, titleHindi, and icon data
import './Home.css';

const Home = ({ isHindi }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleItemClick = (item) => {
    const clickedTitle = isHindi ? item.titleHindi : item.title;
    console.log(clickedTitle);

    localStorage.setItem('entry', JSON.stringify(item.title)); // Store English title in local storage

    switch (item.title) {
      case 'Guest':
        navigate('/guest');
        break;
      case 'Housemaid':
        navigate('/maid');
        break;
      case 'Friends':
        navigate('/friends');
        break;
      case 'Relative':
        navigate('/relative');
        break;
      case 'Worker':
        navigate('/worker');
        break;
      case 'Delivery':
        navigate('/house');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="titles-container">
        {userData.map((item, index) => (
          <div key={index} className="title-box" onClick={() => handleItemClick(item)}>
            <FontAwesomeIcon icon={item.icon} className="icon" />
            <br />
            <span className="title">{isHindi ? item.titleHindi : item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
