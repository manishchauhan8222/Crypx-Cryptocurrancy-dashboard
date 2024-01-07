import React, { Component, useState } from "react";
import { Routes, Route } from "react-router-dom";

// CSS
import "./App.css";

// OBJECT DATA
import HomePageCoinList from "./components/ObjectData/HomePageCoinList";
// import ComponentCoinList from "./components/ObjectData/ComponentCoinList";
import HomePageSideBarMenu from "./components/ObjectData/HomePageSideBarMenu";

//PAGES
import HomePage from "./components/HomePage/HomePage";
import ComponentCoinListPage from "./components/ComponentCoinListPage/ComponentCoinListPage";
import MainSingleCoinPage from "./components/SingleCoinPage/MainSingleCoinPage";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      HomePageCoinList: HomePageCoinList,
      componentCoinList: [],
      HomePageSideBarMenu: HomePageSideBarMenu,
      coins: [],
    };
  }
  // fetching data for homepage coinlist
  fetchData = async (id) => {
    try {
      let data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id.toLowerCase()}`
      );
      let jsonData = await data.json();
      return jsonData.market_data?.current_price?.usd || "API Loading..";
    } catch (error) {
      console.error("Error fetching data:", error);
      return "API Loading..";
    }
  };

  updateCoinPrice = async () => {
    const updatedCoins = await Promise.all(
      this.state.HomePageCoinList.map(async (coin) => {
        try {
          const price = await this.fetchData(coin.id);

          return {
            ...coin,
            price: price,
          };
        } catch (error) {
          console.error(`Error fetching data for ${coin.id}:`, error);
          return {
            ...coin,
            price: "N/A",
          };
        }
      })
    );
    this.setState({ coins: updatedCoins });
  };

  // fetching data for componentcoinlist
  fetchComponentCoinList = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/list"
      );
      const data = await response.json();
      // limitedData = await data.slice(0, 100);
      this.setState({ componentCoinList: data });
    } catch (error) {
      console.error("Error fetching coin list:", error);
    }
  };

  componentDidMount() {
    this.updateCoinPrice();
    this.fetchComponentCoinList();
  }

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              HomePageSideBarMenu={HomePageSideBarMenu}
              coins={this.state.coins}
            />
          }
        ></Route>
        <Route
          path="/CoinList"
          element={
            <ComponentCoinListPage
              ComponentCoinList={this.state.componentCoinList}
            />
          }
        />
        <Route path="/singleCoin" element={<MainSingleCoinPage />} />
      </Routes>
    );
  }
}
