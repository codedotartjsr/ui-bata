import React, { useState } from "react";
import banner from "./Bata-Assets/Unlooped Gifs/Privacy Policy Screen.png";

import button from "./Bata/Bata AR Treasure hunt asset/Buttons/Start the quest button.png";
import './Privacypolicy.css';
import { useNavigate } from "react-router-dom";
import { Timer } from "./Timer"; 

export function Privacypolicy({ setPNo }) {
  let navigate = useNavigate();
  const [timerActive, setTimerActive] = useState(false); 

  const handleButtonClick = () => {
    navigate("/begin-1");
    setTimerActive(true);
  };

  const handleCloseIcon = () => {
    navigate('/');
  }

  return (
    // <div className="page-container">
    //   <div className="background-image">
    //     <div className="banner-image">
    //       <div className="banner-img2 text-center">
    //         <img src={banner} alt="bannerImage" />
    //       </div>
    //       <div className="start-button pt-[20px] text-center" onClick={handleButtonClick}>
    //         <img src={button} alt="buttonImage" />
    //       </div>
    //     </div>
    //   </div>
    //   {timerActive && <Timer />}
    // </div>
    


    <div className="page-container">
      <div className="background-image">
        <div className="page-container3">
          <img src={banner} alt="Banner" className="begin-images" /> 
          <div className="close-icon text-center" onClick={handleCloseIcon}></div>
          <div className="button-begin text-center" onClick={handleButtonClick}></div>
        </div>
      </div>
    </div>
  );
}
