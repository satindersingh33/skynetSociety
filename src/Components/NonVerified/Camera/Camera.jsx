import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import './camera.css';
import BackIcon from '../../BackIcon/BackIcon';

const Camera = ({ isHindi }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [capturedAadhaarImage, setCapturedAadhaarImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isAadhaarCameraOpen, setIsAadhaarCameraOpen] = useState(false);

  const webcamRef = useRef(null);
  const aadhaarWebcamRef = useRef(null);

  const buttonText = isHindi ? 'प्रस्तुत करें' : 'Submit';
  const takePhotoText = isHindi ? 'फोटो लें' : 'Take Photo';
  const aadhaarCardText = isHindi ? 'आधार कार्ड फोटो' : 'Aadhaar Card Photo';

  const handleTakePhoto = () => {
    if (webcamRef.current && !isAadhaarCameraOpen) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    } else {
      console.error('Webcam ref is not available or Aadhaar camera is open.');
    }
  };

  // const handleAadhaarCardClick = () => {
  //   if (!isAadhaarCameraOpen) {
  //     setIsAadhaarCameraOpen(true);
  //   }
  // };

  const handleAadhaarPhoto = () => {
    if (aadhaarWebcamRef.current) {
      const imageSrc = aadhaarWebcamRef.current.getScreenshot();
      setCapturedAadhaarImage(imageSrc);
      setIsAadhaarCameraOpen(false); // Close Aadhaar camera after capture
    } else {
      console.error('Aadhaar webcam ref is not available.');
    }
  };
  const handleButtonClick = async () => {
    if (!capturedImage || !capturedAadhaarImage) {
      console.error('Both general and Aadhaar card photos must be captured.');
      return;
    }
  
    const entry = localStorage.getItem('entry');
    const purpose = localStorage.getItem('purpose');
    const houseno = localStorage.getItem('houseno');
  
    const userDetails = {
      entry,
      purpose,
      houseno,
      generalPhoto: capturedImage,  
      aadhaarPhoto: capturedAadhaarImage
    };
  
    setIsLoading(true);
  
    try {
      localStorage.setItem('generalPhoto', capturedImage);
      console.log(capturedImage);
      localStorage.setItem('aadhaarPhoto', capturedAadhaarImage);
      console.log(capturedAadhaarImage);
  
      const response = await axios.post('http://localhost:9000/nonverify', userDetails);
      console.log('API response:', response.data);
    } catch (error) {
      console.error('API request error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <BackIcon />
      <div className="photo-container">
        <div className={`photo ${isCameraOpen ? 'camera-open' : ''}`} onClick={() => setIsCameraOpen(true)}>
          {!isCameraOpen && <img src={`${process.env.PUBLIC_URL}/Camera.png`} alt="Camera" />}
          {!capturedImage && isCameraOpen && (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam"
            />
          )}
          {capturedImage && <img src={capturedImage} alt="Captured" className="captured-image" />}
          <p onClick={handleTakePhoto}  className='ptext'>{takePhotoText}</p>
        </div>
        <div className={`photo2 ${isAadhaarCameraOpen ? 'camera-open' : ''}`} onClick={() =>  setIsAadhaarCameraOpen(true)}>
          {!isAadhaarCameraOpen && <img src={`${process.env.PUBLIC_URL}/adhaarcard.png`} alt="Aadhaar Card" />}
          { !capturedAadhaarImage && isAadhaarCameraOpen && (
            <div className="aadhaar-webcam">
              <Webcam
                audio={false}
                ref={aadhaarWebcamRef}
                screenshotFormat="image/jpeg"
                className="webcam"
              />
            </div>
          )}
               {capturedAadhaarImage && <img src={capturedAadhaarImage} alt="Captured2" className="captured-image2" />}
          <p onClick={handleAadhaarPhoto} className='ptext'>{aadhaarCardText}</p>
        
        </div>
      </div>
      <div className="submit-button">
        <button onClick={handleButtonClick} className="custom-button" disabled={isLoading || !capturedImage}>
          {isLoading ? 'Submitting...' : buttonText}
        </button>
      </div>
    </div>
  );
};

export default Camera;
