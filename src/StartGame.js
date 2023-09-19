import React from "react";
import quest from "./Bata/Bata AR Treasure hunt asset/Logos/Quest logo big.png";
import bannerImage from "./Bata/Bata AR Treasure hunt asset/Logos/Bubblegummers logo Smal.png";
import character from "./Bata/Bata AR Treasure hunt asset/Characters/Three mascot group.png";
import button from "./Bata/Bata AR Treasure hunt asset/Buttons/Start button.png";
import welcome from "./Bata-Assets/Unlooped Gifs/Welcome Screeen.png";
import './StartGame.css';
import { useNavigate } from "react-router-dom";
// import { Timer } from "./Timer";

export function StartGame() {

  let navigate = useNavigate();

  function handleButtonClick() {
    navigate('/begin-1')
    localStorage.removeItem("timerValue");
  }

  function handleHowToBeginButtonClick() {
    navigate('/view-instruction')
    localStorage.removeItem("timerValue");
  }

  return (
    // <div className="page-container">
    //   <div className="background-image">
     
    //     <div className="banner-image">
    //       <div className="banner text-center">
    //         <img src={bannerImage} alt="bannerImage" />
    //       </div>
    //       <div className="quest text-center">
    //         <img src={quest}   alt="questImage" />
    //       </div>
    //       <div className="character pt-[20px] text-center">
    //         <img src={character}  alt="characterimage" />
    //       </div>
    //       <div className="start-button pt-[20px] text-center" onClick={handleButtonClick}>
    //         <img src={button} alt="buttonImage" />
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="page-container">
      <div className="background-image">
        <div className="page-container3">
          <img src={welcome} alt="Banner" className="begin-images" /> 
           <div className="how-begin text-center" onClick={handleHowToBeginButtonClick}>
           </div>
          <div className="button-begin text-center" onClick={handleButtonClick}>
            {/* <img src={button} alt="buttonImage" /> */}
          </div>
          </div>
        </div>
        {/* <div className="page-container4">
        
        <img src={progress}  alt="buttonImage" className="progresss-image" />
         <div className="time-text  text-center" >
        
      </div>
      
    </div> */}
     
    </div>
  );
}
