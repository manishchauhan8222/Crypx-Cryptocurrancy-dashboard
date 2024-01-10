import React, { Component } from "react";
import userImage from "./user.png";
import eyeImage from "./eye.png";
import "./Register.css";
export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="loginpage-container">
          <div className="loginpage-box">
            <h1 className="login-heading">Sign Up</h1>
            <div className="user">
              <img src={userImage}></img>
            </div>
            <div className="login-name">
              <input
                type="text"
                placeholder="First Name *"
                required=""
                className="firstNameInput"
              ></input>
              <input
                type="text"
                placeholder="Last Name *"
                required=""
                className="lastNameInput"
              ></input>
            </div>
            <input
              type="text"
              placeholder="Email ID *"
              required=""
              className="emailInput"
            ></input>
            <input
              type="password"
              placeholder="Password *"
              required=""
              className="passwordInput"
            ></input>

            <button type="submit" className="register-btn">
              <p className="submit-btn">REGISTER</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
