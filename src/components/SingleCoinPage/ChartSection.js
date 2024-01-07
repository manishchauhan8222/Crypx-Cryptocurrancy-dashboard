import React, { Component } from "react";
import Chart from "react-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export class ChartSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Price: {
        options: {
          chart: {
            id: "area-datetime",
          },
          grid: {
            show: false,
          },
          title: {
            text: "Market Price (USD)",
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              color: "#fcdf03",
            },
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#fcdf03"],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: "dark",
          },
          selection: 365,
        },
        series: [
          {
            name: "Market Price",
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
      Market_Cap: {
        options: {
          grid: {
            show: false,
          },
          title: {
            text: "Market Cap (USD)",
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              color: "#ff69f5",
            },
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#ff69f5"],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: "dark",
          },
        },
        series: [
          {
            name: "Market Cap (USD)",
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
      Tot_Vol: {
        options: {
          grid: {
            show: false,
          },
          title: {
            text: "Market Volume",
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              color: "#00ffea",
            },
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#00ffea"],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: "dark",
          },
        },
        series: [
          {
            name: "Market Volume",
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
    };
    this.prevSelection = this.state.Price.options.selection;
  }
  prevId = this.props.Id;

  fetchData = async () => {
    let chartData = await fetch(
      "https://api.coingecko.com/api/v3/coins/" +
        this.props.Id +
        "/market_chart?vs_currency=usd&days=" +
        this.state.Price.options.selection
    );
    let jsonChartData = await chartData.json();
    this.setState({
      Price: {
        options: this.state.Price.options,
        series: [{ name: "Market Price", data: jsonChartData.prices }],
      },
    });
    this.setState({
      Market_Cap: {
        options: this.state.Market_Cap.options,
        series: [{ name: "Market Capital", data: jsonChartData.market_caps }],
      },
    });
    this.setState({
      Tot_Vol: {
        options: this.state.Tot_Vol.options,
        series: [{ name: "Total Volume", data: jsonChartData.total_volumes }],
      },
    });
  };

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => this.fetchData(), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidUpdate() {
    if (this.prevId !== this.props.Id) {
      this.prevId = this.props.Id;
      this.fetchData();
    }
    if (this.prevSelection !== this.state.Price.options.selection) {
      this.prevSelection = this.state.Price.options.selection;
      this.fetchData();
    }
  }

  render() {
    return (
      <div className="charts">
        <div className="col">
          <div id="chart">
            <div className="toolbar">
              <button
                id="one_month"
                className="btn-time"
                onClick={() =>
                  this.setState({
                    Price: {
                      options: { ...this.tooltip, selection: 1 },
                      series: this.state.Price.series,
                    },
                  })
                }
              >
                1D
              </button>
              &nbsp;
              <button
                id="six_months"
                className="btn-time"
                onClick={() =>
                  this.setState({
                    Price: {
                      options: { ...this.tooltip, selection: 7 },
                      series: this.state.Price.series,
                    },
                  })
                }
              >
                1W
              </button>
              &nbsp;
              <button
                id="one_year"
                className="btn-time"
                onClick={() =>
                  this.setState({
                    Price: {
                      options: { ...this.tooltip, selection: 30 },
                      series: this.state.Price.series,
                    },
                  })
                }
              >
                1M
              </button>
              &nbsp;
              <button
                id="ytd"
                className="btn-time"
                onClick={() =>
                  this.setState({
                    Price: {
                      options: { ...this.tooltip, selection: 182 },
                      series: this.state.Price.series,
                    },
                  })
                }
              >
                6M
              </button>
              &nbsp;
              <button
                id="all"
                className="btn-time"
                onClick={() =>
                  this.setState({
                    Price: {
                      options: { ...this.tooltip, selection: 365 },
                      series: this.state.Price.series,
                    },
                  })
                }
              >
                1Y
              </button>
            </div>
            <Chart
              options={this.state.Price.options}
              series={this.state.Price.series}
              type="area"
              height="400"
              width="100%"
            />
          </div>
        </div>

        <div className="col charts-bottom">
          <div className="charts-bottom-chart">
            <Chart
              options={this.state.Market_Cap.options}
              series={this.state.Market_Cap.series}
              type="line"
              height="300"
              width="100%"
            />
          </div>
          <div className="charts-bottom-chart">
            <Chart
              options={this.state.Tot_Vol.options}
              series={this.state.Tot_Vol.series}
              type="line"
              height="300"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartSection;
