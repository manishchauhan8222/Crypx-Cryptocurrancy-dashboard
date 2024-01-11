import React, { Component } from "react";
import { Link } from "react-router-dom";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
// IMAGES
import rewardImage from "../Images/gift.png";
import appleImage from "../Images/apple.png";
import googleImage from "../Images/google.png";
import desktopImage from "../Images/desktop.png";
import mobileImage from "../Images/mobile.svg";
import proImage from "../Images/pro.svg";
import CodeImage from "../Images/frame.png";
import userImage from "../Images/user.png";

// PAGES
import Coin from "./Coin";
import faqData from "./FAQ";
import Register from "../Login&Register/Register";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,

      selectedImage: mobileImage,
    };
  }

  toggleAnswer = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  toggleimage = (e) => {
    const targetClass = e.target.classList; // Get the classes of the clicked element
    let selectedImage = null;

    // Check the classes of the clicked element
    if (targetClass.contains("pro")) {
      selectedImage = proImage;
    } else {
      selectedImage = mobileImage;
    }

    // Update the selectedImage state
    this.setState({ selectedImage });
  };

  render() {
    const { selectedImage } = this.state;
    return (
      <div className="main-container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="navigation">
              <div className="nav-left">
                <div className="nav-left-a">
                  <Link
                    to="/"
                    className="link-tag navbar-brand d-flex ml-auto display-2  fs-2 fw-bold text-uppercase "
                  >
                    Cryp<span className="ex">Ex</span>
                  </Link>
                </div>
                <div className="nav-left-b homepage-nav-left-b">
                  <div className="hiuser-nav">
                    Hi User
                    <img src={userImage}></img>{" "}
                  </div>

                  <div
                    class=" hamburger-menu"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <div className="line line1"></div>
                    <div className="line line1"></div>
                    <div className="line line1"></div>
                  </div>

                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-buttons">
                      <div className="hiuser">Hi User</div>
                    </div>
                    {this.props.HomePageSideBarMenu.map((item, index) => (
                      <div className="offcanvas-items">
                        <div className="offcanvas-item">
                          <img src={item.src}></img>
                          <Link to={item.path} className="link-tag">
                            <p className="offcanvas-text">{item.item}</p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="nav-right"></div>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className=" home-container-1">
            <div className="home-container-1-left">
              <p className="home-container-1-left-heading">
                <span className="home-container-1-left-heading-value">
                  170,609,170
                </span>
                <br></br>USERS TRUST US
              </p>
              <div className="home-container-1-left-email">
                <input type="text" placeholder="Email/Phone number"></input>

                <button
                  class="btn  btn-email btn-email-input"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  Register
                </button>

                <div
                  className="offcanvas offcanvas-top"
                  tabindex="-1"
                  id="offcanvasTop"
                  aria-labelledby="offcanvasTopLabel"
                >
                  <div class="offcanvas-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <Register></Register>
                </div>
              </div>
              <div className="home-container-1-left-refer">
                <div className="home-container-1-left-refer-content">
                  <img
                    src={rewardImage}
                    alt="reward icon"
                    className="home-container-1-left-refer-icon"
                  ></img>
                  <p className="home-container-1-left-refer-text">
                    Register now and get up to 100 USDT in rewards
                  </p>
                </div>
              </div>
              <div className="home-container-1-left-download">
                <div className="home-container-1-left-download-left">
                  <p className="home-container-1-download-heading list-group-item-coin-left-coinname">
                    Or Connect With
                  </p>
                  <div className="home-container-1-download-icons">
                    <div className="home-container-1-download-icon">
                      <img src={googleImage} alt="google"></img>
                    </div>
                    <div className="home-container-1-download-icon">
                      <img src={appleImage} alt="apple"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-container-1-right">
              <div className="home-container-1-right-heading">
                <p className="home-container-1-right-heading-text">
                  Cryptocurrency by market price
                </p>
              </div>
              <Coin coins={this.props.coins}></Coin>
            </div>
          </div>
          <div className="home-container-2">
            <div className=" home-container-2-left">
              <div className="home-container-2-left-image">
                <img
                  src={selectedImage}
                  alt="selected image"
                  className="selected-image"
                  style={{
                    width: "50%",
                  }}
                />
              </div>
              <div className="imagetoggle">
                <p
                  className="imagetoggle-text lite"
                  onClick={(e) => this.toggleimage(e)}
                  style={{
                    borderBottom:
                      selectedImage === mobileImage
                        ? "1px solid #fcd535"
                        : "none",
                    color: selectedImage === mobileImage ? "white" : "inherit",
                  }}
                >
                  Lite
                </p>
                <p
                  className="imagetoggle-text pro"
                  onClick={(e) => this.toggleimage(e)}
                  style={{
                    borderBottom:
                      selectedImage === proImage ? "1px solid #fcd535" : "none",
                    color: selectedImage === proImage ? "white" : "inherit",
                  }}
                >
                  Pro
                </p>
              </div>
            </div>
            <div className=" home-container-2-right">
              <div className=" home-container-2-right-heading">
                <p className=" home-container-2-right-heading-text">
                  Trade on the go.
                </p>
                <p className=" home-container-2-right-heading-text">
                  Anywhere, anytime.
                </p>
              </div>
              <div className=" home-container-2-right-codeSection">
                <div className=" home-container-2-right-codeSection-code">
                  <img src={CodeImage} alt="QR CODE"></img>
                </div>
                <div className=" home-container-2-right-codeSection-text">
                  <p className="list-group-item-coin-left-coinname">
                    Scan to Download the App
                  </p>
                  <p className="list-group-item-coin-left-coinsymbol">
                    iOS and Android
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container-3">
            <div className="home-container-3-content">
              <div className="home-container-3-content-heading">
                <p className="home-container-3-content-heading-text">
                  Frequently Asked Questions
                </p>
              </div>
              {faqData.map((item, index) => (
                <div
                  className="home-container-3-content-questions"
                  onClick={() => this.toggleAnswer(index)}
                  key={index}
                >
                  <div className="home-container-3-content-questions-question">
                    <div className="home-container-3-content-questions-question-left">
                      <span className="home-container-3-content-questions-question-number list-group-item-coin-left-coinsymbol">
                        {index + 1}
                      </span>
                      <span className="home-container-3-content-questions-question-text list-group-item-coin-left-coinsymbol">
                        {item.question}
                      </span>
                    </div>
                    <div className="home-container-3-content-questions-right">
                      {this.state.activeIndex === index ? "-" : "+"}
                    </div>
                  </div>
                  {this.state.activeIndex === index && (
                    <div
                      className={`home-container-3-content-questions-answer ${
                        this.state.activeIndex === index ? "show" : ""
                      }`}
                    >
                      <p className="home-container-3-content-questions-answer-text list-group-item-coin-left-coinname">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* conatiner */}``
        <footer className="home-footer">
          <div className="home-footer-container-1">
            <p className="home-footer-container-1-text">For Verified Users</p>
            <p className="home-footer-container-1-text">
              Get up to{" "}
              <span className="home-footer-container-1-text-golden">
                100 USDT
              </span>
              &nbsp; in rewards
            </p>

            <button
              class="btn  btn-email home-footer-container-1-btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              Register
            </button>

            <div
              className="offcanvas offcanvas-top"
              tabindex="-1"
              id="offcanvasTop"
              aria-labelledby="offcanvasTopLabel"
            >
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <Register></Register>
            </div>
          </div>
          <div className="home-footer-container-2">
            <div className="home-footer-container-2-content">
              <p className="list-group-item-coin-left-coinname">
                Crypx&copy; 2024
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
