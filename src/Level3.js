import React from "react";
import banner from './Bata-Assets/Banners with Text and elements/Banners with Text and elements/Group 150.png';

import progress from "./Bata-Assets/Bata AR Treasure hunt asset/Bata AR Treasure hunt asset/Progress bar/Progress bar 3.png"
import { useNavigate } from "react-router-dom";
import './Level2.css';

export function Level3({setPNo}) {
  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/scanner");
    setPNo('3')
  };

  return (
    <div className="page-container">
      <div className="background-image">
      <div className="page-container1">
        
            <img src={banner} alt="Banner" className="clock-image" />
             <div className="time-text  text-center" onClick={handleButtonClick}>
            {/* <img src={button} alt="buttonImage" /> */}
          </div>
          
        </div>
        <div className="page-container2">
        
        <img src={progress}  alt="buttonImage" className="progress-image" />
         <div className="time-text  text-center" >
        
      </div>
      
    </div>
      </div>
    </div>
  );
}