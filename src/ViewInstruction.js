import React from "react";
// import banner from './Bata-Assets/Banners with Text and elements/Banners with Text and elements/Group 144.png';
import banner from './Bata-Assets/Unlooped Gifs/Instructions.png'
import button from "./Bata/Bata AR Treasure hunt asset/Buttons/Start the quest button.png";
import { useNavigate } from "react-router-dom";
import './ViewInstruction.css';

export function ViewInstruction() {
    let navigate = useNavigate();

    const handleButtonClick = () => {
      navigate("/begin-1");
    };

    function handlePrivacyPolicyButtonClick() {
      navigate('/privacy-policy')
      localStorage.removeItem("timerValue");
    }

    const handleCloseIcon = () => {
      navigate('/');
    }

    return (
    //   <div className="page-container">
    //   <div className="background-image">
    //     <div className="banner-image">
    //       <div className="banner-img text-center">
    //         <img src={banner} alt="bannerImage" />
    //       </div>
    //       <div className="start-button  pt-[20px] text-center" onClick={handleButtonClick}>
    //         <img src={button} alt="buttonImage" />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="page-container">
      <div className="background-image">
        <div className="page-container3">
          <img src={banner} alt="Banner" className="begin-images" /> 
          <div className="how-begin text-center" onClick={handlePrivacyPolicyButtonClick}></div>
          <div className="close-icon text-center" onClick={handleCloseIcon}></div>
          <div className="button-begin text-center" onClick={handleButtonClick}></div>
        </div>
      </div>
    </div>
    );
  }