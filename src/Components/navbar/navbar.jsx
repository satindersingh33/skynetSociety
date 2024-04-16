import React, {  useEffect } from 'react';
import './nav.css'; 
import { useNavigate } from 'react-router-dom';

const Nav = ({ isHindi, toggleLanguage }) => {
    const navigate = useNavigate();

   

    useEffect(() => {
        console.log('Current language:', isHindi ? 'Hindi' : 'English');
    }, [isHindi]); 

    const handleCompanyClick = () => {
        navigate('/');
    };

    return (
        <div className="main-container">
            <h2 onClick={handleCompanyClick} className='company-name'>
               
                {isHindi ? 'स्काइनेट एन्क्लेव' : 'Skynet Enclave'} 
            </h2>
    
            <div className="switch">
                <input
                    id="language-toggle"
                    className="check-toggle check-toggle-round-flat"
                    type="checkbox"
                    checked={isHindi}
                    onChange={toggleLanguage}
                />
                <label htmlFor="language-toggle"></label>
                <span className={isHindi ? 'off' : 'on'}>
                    {isHindi ? 'हिंदी' : 'EN'}
                </span>
            </div>
        </div>
    );
};

export default Nav;
