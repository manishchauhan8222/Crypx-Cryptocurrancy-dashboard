import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ComponentCoin.css";
import Pagination from "./Pagination";

export default class ComponentCoinListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItems: "",
      currentPage: 1,
      coinsPerPage: 10,
    };
  }

  handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    this.setState({
      searchItems: searchValue,
      currentPage: 1, // Reset current page when searching
    });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { currentPage, coinsPerPage, searchItems } = this.state;
    const { ComponentCoinList, NewstaticComponentList } = this.props;

    const combinedList = [...ComponentCoinList, ...NewstaticComponentList];

    // Filter ComponentCoinList based on search input
    let displayCoins = combinedList.filter(
      (item) =>
        item.symbol.toLowerCase().includes(searchItems) ||
        item.id.toLowerCase().includes(searchItems)
    );

    // If there are search results, use them; otherwise, use NewstaticComponentList
    let currentCoins;
    if (displayCoins.length > 0) {
      currentCoins = displayCoins;
    } else {
      currentCoins = NewstaticComponentList;
    }

    // Implement pagination
    const indexOfLastCoin = currentPage * coinsPerPage;
    const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;

    const totalDisplayCoins = currentCoins.length;

    const renderCoins = currentCoins
      .slice(indexOfFirstCoin, indexOfLastCoin)
      .map((item, index) => (
        <li className="list-group-item coin-data-container" key={index}>
          <Link to="/singleCoin">
            <div className="list-group-item-container data-container">
              <div className="symbol-name-marketValue">
                <p className="coin-headings">
                  {item.symbol.toUpperCase()}&nbsp;
                  <span className="light">/{item.id}</span>
                </p>
                <p className="market-value light">
                  VOL.{item.marketVolume || "Load.."}
                </p>
              </div>
              <div className="price-high-container">
                <div className="price">
                  <p className="coin-headings">{item.price || "API Load.."}</p>
                </div>
                <div className="last-day-change green-box">
                  <p className="coin-headings">{item.high || "API Load.."}</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ));

    return (
      <div className="coinList-container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="navigation">
              <div className="nav-left component-nav-left">
                <div className="nav-left-a">
                  <Link
                    to="/"
                    className="link-tag navbar-brand d-flex ml-auto display-2  fs-2 fw-bold text-uppercase "
                  >
                    Cryp<span className="ex">Ex</span>
                  </Link>
                </div>
                <div className="nav-left-b ">
                  <div class="container-fluid">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control1 me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={this.state.searchItems}
                        onChange={this.handleSearch}
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="nav-right"></div>
            </div>
          </div>
        </nav>

        <div className="coinList-content">
          <ul className="list-group coin-data-heading-container">
            <li className="list-group-item coin-data-heading">
              <div className="list-group-item-container">
                <div className="symbol-name-marketValue">
                  <p className="coin-headings">Coin</p>
                </div>
                <div className="price-high-container">
                  <div className="price">
                    <p className="coin-headings">Price $</p>
                  </div>
                  <div className="last-day-change">
                    <p className="coin-headings">24h High %</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className="list-group coin-data-main-container">{renderCoins}</ul>
          <Pagination
            totalCoins={totalDisplayCoins}
            coinsPerPage={coinsPerPage}
            currentPage={currentPage}
            onChangePage={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
