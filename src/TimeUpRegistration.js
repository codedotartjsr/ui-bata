
import React from "react";
import banner3 from "./Bata-Assets/Banners with Text and elements/Banners with Text and elements/Group 154.png";
import { useNavigate } from "react-router-dom";
import banner1 from "./Assets/TimeupScreens/Level 1.png"
import banner2 from "./Assets/TimeupScreens/Level 2.png"
import banner4 from "./Assets/TimeupScreens/Level 4.png"
import "./Level1.css";
import "./TimeUpRegistration.css"

export function Timeup1() {
  let navigate = useNavigate();
  const handleButtonClick = () => {
   console.log("699");
   navigate("/register");
  };

  return (
    <div className="page-container">
      <div className="background-image">
        <div className="timeup-container">
          <img src={banner1} alt="Banner" className="timeup-images" />
          <div className="timeup-begin text-center" onClick={handleButtonClick}>
          
          </div>
        </div>
        
      </div>
    </div>
  );
}

export function Timeup2() {
    let navigate = useNavigate();
    const handleButtonClick = () => {
     console.log("699");
     navigate("/register");
    };
  
    return (
      <div className="page-container">
        <div className="background-image">
          <div className="timeup-container">
            <img src={banner2} alt="Banner" className="timeup-images" />
            <div className="timeup-begin text-center" onClick={handleButtonClick}>
            
            </div>
          </div>
          
        </div>
      </div>
    );
  }
  export function Timeup3() {
    let navigate = useNavigate();
    const handleButtonClick = () => {
     console.log("699");
     navigate("/register");
    };
  
    return (
      <div className="page-container">
        <div className="background-image">
          <div className="timeup-container">
            <img src={banner3} alt="Banner" className="timeup-images" />
            <div className="timeup-begin text-center" onClick={handleButtonClick}>
            
            </div>
          </div>
          
        </div>
      </div>
    );
  }
  export function Timeup4() {
    let navigate = useNavigate();
    const handleButtonClick = () => {
     console.log("699");
     navigate("/register");
    };
  
    return (
      <div className="page-container">
        <div className="background-image">
          <div className="timeup-container">
            <img src={banner4} alt="Banner" className="timeup-images" />
            <div className="timeup-begin text-center" onClick={handleButtonClick}>
            
            </div>
          </div>
          
        </div>
      </div>
    );
  }