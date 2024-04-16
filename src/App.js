// App.js
import {React,useState} from 'react';
import './App.css';

import Home from './Components/Home/home';
import Nav from './Components/navbar/navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Guest from './Components/NonVerified/Guest/Guest';
import Maid  from './Components/Verified/Maid/Maid';
import HouseNo from './Components/NonVerified/Houseno/HouseNo';
import Camera from './Components/NonVerified/Camera/Camera';
import Friends from './Components/NonVerified/friends/friends';
import Relative from './Components/NonVerified/Relatives/relative';
import Worker from './Components/NonVerified/worker/worker';
import Delivery from './Components/NonVerified/Delivery/Delivery';


function App() {

  const [isHindi, setIsHindi] = useState(false);

  const toggleLanguage = () => {
    setIsHindi((prevIsHindi) => !prevIsHindi);
  };






  return (  
    <div className="screen">
    <Router>
      <Nav   isHindi={isHindi} toggleLanguage={toggleLanguage}/>
        <Routes>
        <Route path="/" element={<Home  isHindi={isHindi}/>}/>           
        <Route path="/guest" element={<Guest   isHindi={isHindi} />} /> 
        <Route path="/maid" element={<Maid  isHindi={isHindi} />} />               
        <Route path="/house" element={<HouseNo  isHindi={isHindi} />} />               
        <Route path="/Camera" element={<Camera   isHindi={isHindi}/>} />               
        <Route path="/friends" element={<Friends isHindi={isHindi}/>} /> 
        <Route path="/relative" element={<Relative isHindi={isHindi}/>} /> 
        <Route path="/worker" element={<Worker isHindi={isHindi}/>} /> 
        <Route path="/delivery" element={<Delivery />} /> 
        </Routes>

    
    </Router>


  </div>
  );
}

export default App;
