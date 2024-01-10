import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

export class Header extends Component {
  handleChartTypeChange = (event) => {
    this.props.handleChartTypeChange(event);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="nav-content">
              <div className="nav-left-coinpage">
                <Link
                  to="/"
                  className="link-tag navbar-brand d-flex ml-auto display-2  fs-2 fw-bold text-uppercase "
                >
                  Cryp<span className="ex">Ex</span>
                </Link>
              </div>

              <div className="nav-right">
                <div className="header-search">
                  <select
                    className="form-select form-select-lg "
                    aria-label=".form-select-lg example"
                    name="selectCoin"
                    onChange={this.props.handle_Submit}
                  >
                    <option value="bitcoin">Select Coin</option>
                    <option value="avalanche-2">Avalanche (AVAX)</option>
                    <option value="binancecoin">Binance (BNB)</option>
                    <option value="bitcoin">Bitcoin (BTC) </option>
                    <option value="cardano">Cardano (ADA)</option>
                    <option value="decentraland">Decentraland (MANA)</option>
                    <option value="dogecoin">Dogecoin (DOGE)</option>
                    <option value="ethereum">Ethereum (ETH)</option>
                    <option value="ripple">Ripple (XRP)</option>
                    <option value="solana">Solana (SOL)</option>
                    <option value="tether">Tether (USDT)</option>
                  </select>

                  <select
                    className="form-select form-select-lg "
                    aria-label=".form-select-lg example"
                    name="selectCoin"
                    style={{ width: "fit-content" }}
                    onChange={this.props.handleChartTypeChange}
                  >
                    <option value="area">Chart Type</option>

                    <option value="area">Area</option>
                    <option value="bar">Bar</option>
                  </select>
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
                  <div className="cardSection-sidebar">
                    <section className="offcanvas-row m-3 mb-0">
                      <div className="card text-white text-center  m-3 offcanvas-card">
                        <div className="card-body">
                          <h6 className="card-title">Market Cap 24Hrs</h6>
                          <p className="card-text fw-bold fs-5">
                            {this.props.mCap24} %
                          </p>
                        </div>
                      </div>
                      <div className="card text-white text-center  m-3 offcanvas-card">
                        <div className="card-body">
                          <h6
                            className="card-title"
                            style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
                          >
                            All Time High
                          </h6>
                          <p className="card-text fw-bold fs-5">
                            ${this.props.ath}
                          </p>
                        </div>
                      </div>
                      <div className="card text-white text-center  m-3 offcanvas-card">
                        <div className="card-body">
                          <h6 className="card-title">All Time High</h6>
                          <p className="card-text fw-bold fs-5">
                            ${this.props.atl}
                          </p>
                        </div>
                      </div>

                      <div className="card text-white text-center  m-3 offcanvas-card">
                        <div className="card-body">
                          <h6 className="card-title">Positive Sentiments </h6>
                          <p className="card-text fw-bold fs-5">
                            {this.props.sentiment} %
                          </p>
                        </div>
                      </div>
                      <div className="card text-white text-center  m-3 offcanvas-card">
                        <div className="card-body">
                          <h6 className="card-title"> High 24Hrs </h6>
                          <p className="card-text fw-bold fs-5">
                            ${this.props.high24}
                          </p>
                        </div>
                      </div>
                      <div className="card text-white text-center  m-3 offcanvas-card">
                        <div className="card-body">
                          <h6 className="card-title"> Low 24Hrs </h6>
                          <p className="card-text fw-bold fs-5">
                            ${this.props.low24}
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
