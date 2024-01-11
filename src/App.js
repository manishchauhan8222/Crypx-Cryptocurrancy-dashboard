import React, { Component, useState } from "react";
import { Routes, Route } from "react-router-dom";

// CSS
import "./App.css";

// OBJECT DATA
import HomePageCoinList from "./components/ObjectData/HomePageCoinList";
import StaticComponentCoinList from "./components/ObjectData/StaticComponentCoinList";
import {
  HomePageSideBarMenu,
  HomePageSideBarMenuUpper,
} from "./components/ObjectData/HomePageSideBarMenu";

//PAGES
import HomePage from "./components/HomePage/HomePage";
import ComponentCoinListPage from "./components/ComponentCoinListPage/ComponentCoinListPage";
import MainSingleCoinPage from "./components/SingleCoinPage/MainSingleCoinPage";
import Register from "./components/Login&Register/Register";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // Data for home page
      HomePageCoinList: HomePageCoinList,
      coins: [],
      //  data for componentpage

      NewstaticComponentList: [],
      componentCoinList: [],

      //data for side menu bar
      HomePageSideBarMenu: HomePageSideBarMenu,
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

  //fetching data for static componentcoinlist default

  fetchDataForComponent = async (id) => {
    try {
      let data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id.toLowerCase()}`
      );
      let jsonData = await data.json();
      const price = jsonData.market_data?.current_price?.usd || "API Loading..";
      const marketVolume =
        jsonData.market_data?.total_volume?.usd || "API Loading..";
      const high =
        jsonData.market_data?.price_change_percentage_24h || "API Loading..";
      return {
        price,
        marketVolume,
        high,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        price: "API Loading..",
        marketVolume: "API Loading..",
        high: "API Loading..",
      };
    }
  };

  updateCoinPriceForComponent = async () => {
    try {
      const updateCoinPrice = await Promise.all(
        StaticComponentCoinList.map(async (coin) => {
          try {
            const { price, marketVolume, high } =
              await this.fetchDataForComponent(coin.id);
            return {
              ...coin,
              price,
              marketVolume,
              high,
            };
          } catch (error) {
            console.error(`Error fetching data for ${coin.id}:`, error);
            return {
              ...coin,
              price: "API Load..",
              marketVolume: "API Load..",
              high: "..",
            };
          }
        })
      );
      this.setState({ NewstaticComponentList: updateCoinPrice });
      console.log(this.state.NewstaticComponentList);
    } catch (error) {
      console.error("Error updating component prices:", error);
    }
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
  fetchDataForComponentAPI = async (symbol) => {
    try {
      let data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${symbol.toLowerCase()}`
      );
      let jsonData = await data.json();
      const price = jsonData.market_data?.current_price?.usd || "API Loading..";
      const marketVolume =
        jsonData.market_data?.total_volume?.usd || "API Loading..";
      const high =
        jsonData.market_data?.price_change_percentage_24h || "API Loading..";
      return {
        price,
        marketVolume,
        high,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        price: "API Loading..",
        marketVolume: "API Loading..",
        high: "API Loading..",
      };
    }
  };

  updateCoinPriceForComponentAPI = async () => {
    try {
      const updateCoinPrice = await Promise.all(
        this.state.componentCoinList.map(async (coin) => {
          try {
            const { price, marketVolume, high } =
              await this.fetchDataForComponentAPI(coin.symbol);
            return {
              ...coin,
              price,
              marketVolume,
              high,
            };
          } catch (error) {
            console.error(`Error fetching data for ${coin.id}:`, error);
            return {
              ...coin,
              price: "API Load..",
              marketVolume: "API Load..",
              high: "..",
            };
          }
        })
      );
      this.setState({ componentCoinList: updateCoinPrice });
    } catch (error) {
      console.error("Error updating component prices:", error);
    }
  };

  componentDidMount() {
    this.updateCoinPrice();
    this.updateCoinPriceForComponent();
    this.fetchComponentCoinList();
    this.updateCoinPriceForComponentAPI();
  }

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              HomePageSideBarMenu={HomePageSideBarMenu}
              HomePageSideBarMenuUpper={HomePageSideBarMenuUpper}
              coins={this.state.coins}
            />
          }
        ></Route>
        <Route
          path="/CoinList"
          element={
            <ComponentCoinListPage
              NewstaticComponentList={this.state.NewstaticComponentList}
              ComponentCoinList={this.state.componentCoinList}
            />
          }
        />
        <Route path="/singleCoin/:id" element={<MainSingleCoinPage />} />
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    );
  }
}
