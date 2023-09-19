// import React, { useState, useEffect } from "react";
// import clock from "./Bata/Bata AR Treasure hunt asset/Clock/Timer clock big.png"
// import "./Timer.css";

// export function Timer() {
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     setIsActive(true);
//   }, [])

  

//   const formatTime = (time) => {
//     const min = Math.floor(time / 60);
//     const sec = time % 60;
//     return `${min}:${sec < 10 ? `0${sec}` : sec}`;
//   };

//   const startTimer = () => {
//     setIsActive(true);
//   };

//   const stopTimer = () => {
//     setIsActive(false);
//   };

//   useEffect(() => {
//     let interval;

//     if (isActive && timeLeft > 0) {
//       interval = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (timeLeft === 0) {
//       stopTimer();
//     }

//     return () => clearInterval(interval);
//   }, [isActive, timeLeft]);

//   return (
//     <div>
//       <div className="clock-container">
//         <img src={clock} alt="Clock" className="clock-image" />
//         <span className="clock-text">{formatTime(timeLeft)}</span>
//       </div>
//       <div>
//         {/* <button onClick={startTimer}>Start</button> */}
//         {/* <button onClick={stopTimer}>Stop</button> */}
//       </div>
//     </div>
//   );
// }















import React, { useState, useEffect } from "react";
import clock from "./Bata/Bata AR Treasure hunt asset/Clock/Timer clock big.png"
import "./Timer.css";
import { useNavigate } from "react-router-dom";

export function Timer(props) {
  
  const savedTimeLeft = localStorage.getItem("timerValue");
  const initialTimeLeft = savedTimeLeft ? parseInt(savedTimeLeft, 10) :600;

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    setIsActive(true);
  }, [])
  console.log(props.pageNo)
  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  useEffect(() => {
    let interval;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
     
    } else if (timeLeft === 0) {
      stopTimer();
      switch (props.pageNo) {
        case "1":
         console.log("completed level 2")
         navigate("/timeup1")
          break;
        case "2":
          console.log("completed level 3")
          navigate("/timeup2");
          break;
        case "3":
          console.log("completed level 4")
          navigate("/timeup3")
          break;
        case "4":
          console.log("completed level 5")
          navigate("/timeup4")
          break;
        // case "5":
        //   navigate("/winner");
        //   break;
        default:
          break;
      }

      
    }

    // Save the current timer value in local storage
    localStorage.setItem("timerValue", timeLeft.toString());

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  return (
    <div>
      <div className="clock-container">
        <img src={clock} alt="Clock" className="clock-image" />
        <span className="clock-text">{formatTime(timeLeft)}</span>
      </div>
      <div>
        {/* <button onClick={startTimer}>Start</button> */}
        {/* <button onClick={stopTimer}>Stop</button> */}
      </div>
    </div>
  );
}
