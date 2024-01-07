import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Coin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container-1-right-coins">
        <ul className="list-group list-group-flush">
          {this.props.coins.map((item, index) => (
            <li className="list-group-item" key={index}>
              <div className="list-group-item-coin">
                <div className="list-group-item-coin-left">
                  <span className="list-group-item-coin-left-coinsymbol">
                    <li>
                      <Link to="/singleCoin" className="link-tag">
                        {item.symbol}
                      </Link>
                    </li>
                  </span>
                  <span className="list-group-item-coin-left-coinname">
                    <li>
                      <Link to="/singleCoin" className="link-tag">
                        {item.id}
                      </Link>
                    </li>
                  </span>
                </div>
                <div className="list-group-item-coin-right">
                  {" "}
                  <li>
                    <Link to="/singleCoin" className="link-tag">
                      ${item.price}
                    </Link>
                  </li>
                </div>
              </div>
            </li>
          ))}
          <li className="view-btn">
            <Link to="/CoinList" className="link-tag">
              <button
                type="button"
                className="btn btn-success home-container-1-right-viewall"
              >
                View All
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
