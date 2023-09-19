import React, { useState } from "react";
import "./App.css";
import "./Register.css";
import axios from "axios";
import banner from './Bata-Assets/Banners with Text and elements/Banners with Text and elements/Group 146 (4).png';
import progress from "./Bata-Assets/Bata AR Treasure hunt asset/Bata AR Treasure hunt asset/Progress bar/Progress bar 6.png"

export function Register() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  // };

  const handleButtonClick = async(event) => {
    event.preventDefault();
    const data = {
      name: name,
      emailid: email,
      phonenumber: phoneNumber,
      campaignId: sessionStorage.getItem('campaignId')
    };
    try {
      const response = await axios.post("https://us-central1-my-mess-38375.cloudfunctions.net/game/gameuser", data, {
        "Content-Type": "application/json",
      });
      console.log("Data posted successfully:", response.data);
      setName("")
      setPhoneNumber("");
      setEmail("");
    } catch (error) {
      console.error("Error posting data:", error);
    }
    finally{
      console.log("hello")
    }
  };

  return (
    <div className="container">
      <div className="page-container">
        <div className="background-image">
          <div className="register-container1">
            <img src={banner} alt="Banner" className="register-image" />
            <div >
            <div className="overlapping-form">
          {/* <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div> */}
           <div >
            {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              className="hello"
            />
          </div><br/><br/>
          <div >
            {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              className="hello"
            />
          </div><br/><br/>
          <div >
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="hello"
            />
          </div>
         
        </div>
      </div>
          </div>
          <div className="register-container2">
            <img src={progress} alt="buttonImage" className="progress-image" />
            <div className="register-text text-center" onClick={handleButtonClick}></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
