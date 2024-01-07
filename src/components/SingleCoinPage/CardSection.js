import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
export class CardSection extends Component {
  render() {
    return (
      <div className="cardSection">
        <div className="fs-1 fw-bold m-3 text-Capitalize">
          {this.props.coinName}
        </div>
        <section className="row m-3 mb-0">
          <div className="card text-white text-center  m-3">
            <div className="card-body">
              <h6 className="card-title">Market Cap 24Hrs</h6>
              <p className="card-text fw-bold fs-5">{this.props.mCap24} %</p>
            </div>
          </div>
          <div className="card text-white text-center  m-3">
            <div className="card-body">
              <h6
                className="card-title"
                style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
              >
                All Time High
              </h6>
              <p className="card-text fw-bold fs-5">${this.props.ath}</p>
            </div>
          </div>
          <div className="card text-white text-center  m-3">
            <div className="card-body">
              <h6 className="card-title">All Time High</h6>
              <p className="card-text fw-bold fs-5">${this.props.atl}</p>
            </div>
          </div>

          <div className="card text-white text-center  m-3">
            <div className="card-body">
              <h6 className="card-title">Positive Sentiments </h6>
              <p className="card-text fw-bold fs-5">{this.props.sentiment} %</p>
            </div>
          </div>
          <div className="card text-white text-center  m-3">
            <div className="card-body">
              <h6 className="card-title"> High 24Hrs </h6>
              <p className="card-text fw-bold fs-5">${this.props.high24}</p>
            </div>
          </div>
          <div className="card text-white text-center  m-3">
            <div className="card-body">
              <h6 className="card-title"> Low 24Hrs </h6>
              <p className="card-text fw-bold fs-5">${this.props.low24}</p>
            </div>
          </div>
        </section>
        <div className="coin-price-container">
          <div className="current-price"> Current Price</div>
          <div className="current-price-amount">${this.props.currentPrice}</div>
        </div>
      </div>
    );
  }
}

export default CardSection;
