import React, { Component } from "react";
import Header from "./Header";
import CardSection from "./CardSection";
import ChartSection from "./ChartSection";

export default class MainSingleCoinPage extends Component {
  constructor() {
    super();
    this.state = {
      chartType: "bar",
      Id: "",
      Data: {},
    };
  }
  fetchData = async (name2) => {
    let name = window.location.href.split("/")[4].toString();
    if (name2) {
      name = name2;
    }
    const url = "https://api.coingecko.com/api/v3/coins/" + name.toLowerCase();
    console.log(url);
    let data = await fetch(url);
    let JsonData = await data.json();
    this.setState({ Id: name, Data: JsonData });
  };

  handleSubmit = async (event) => {
    this.fetchData(event.target.value);
  };

  handleChartTypeChange = (event) => {
    this.setState({ chartType: event.target.value });
    console.log(event.target.value);
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <Header
          handle_Submit={this.handleSubmit}
          handleChartTypeChange={this.handleChartTypeChange}
          coinName={this.state.Data.name}
          currentPrice={
            this.state.Data.market_data
              ? this.state.Data.market_data.current_price["usd"]
              : ""
          }
          mCap24={
            this.state.Data.market_data
              ? this.state.Data.market_data.market_cap_change_percentage_24h
              : ""
          }
          ath={
            this.state.Data.market_data
              ? this.state.Data.market_data.ath.usd
              : ""
          }
          atl={
            this.state.Data.market_data
              ? this.state.Data.market_data.ath.usd
              : ""
          }
          sentiment={this.state.Data.sentiment_votes_up_percentage}
          high24={
            this.state.Data.market_data
              ? this.state.Data.market_data.high_24h["usd"]
              : ""
          }
          low24={
            this.state.Data.market_data
              ? this.state.Data.market_data.low_24h["usd"]
              : ""
          }
        />
        <CardSection
          coinName={this.state.Data.name}
          currentPrice={
            this.state.Data.market_data
              ? this.state.Data.market_data.current_price["usd"]
              : ""
          }
          mCap24={
            this.state.Data.market_data
              ? this.state.Data.market_data.market_cap_change_percentage_24h
              : ""
          }
          ath={
            this.state.Data.market_data
              ? this.state.Data.market_data.ath.usd
              : ""
          }
          atl={
            this.state.Data.market_data
              ? this.state.Data.market_data.ath.usd
              : ""
          }
          sentiment={this.state.Data.sentiment_votes_up_percentage}
          high24={
            this.state.Data.market_data
              ? this.state.Data.market_data.high_24h["usd"]
              : ""
          }
          low24={
            this.state.Data.market_data
              ? this.state.Data.market_data.low_24h["usd"]
              : ""
          }
        />
        <ChartSection
          Id={this.state.Id}
          chartType={this.state.chartType}
          priceChange24={
            this.state.Data.market_data
              ? this.state.Data.market_data.price_change_24h_in_currency.usd
              : ""
          }
          MarketCap={
            this.state.Data.market_data
              ? this.state.Data.market_data.market_cap.usd
              : ""
          }
          TotVol={
            this.state.Data.market_data
              ? this.state.Data.market_data.total_volume.usd
              : ""
          }
          Circulating={
            this.state.Data.market_data
              ? this.state.Data.market_data["circulating_supply"]
              : ""
          }
          twitterF={
            this.state.Data.community_data
              ? this.state.Data.community_data.twitter_followers
              : ""
          }
        />
      </div>
    );
  }
}
