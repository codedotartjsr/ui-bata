import React from "react";
import banner from "./Bata-Assets/Unlooped Gifs/Level 1.gif"
import { useNavigate } from "react-router-dom";
import "./Level1.css";

export function Level1({ setPNo }) {
  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/scanner");
    setPNo("1");
  };

  return (
    <div className="page-container">
      <div className="background-images">
        <div className="page-container3">
          <img src={banner} alt="Banner" className="begin-images" />
          <div className="button-begin text-center" onClick={handleButtonClick}>
            {/* <img src={button} alt="buttonImage" /> */}
          </div>
        </div>
        {/* <div className="page-container4">
        
        <img src={progress}  alt="buttonImage" className="progresss-image" />
         <div className="time-text  text-center" >
        
      </div>
      
    </div> */}
      </div>
    </div>
  );
}

