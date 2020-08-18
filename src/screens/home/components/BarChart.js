import React from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "../home.css";
class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: this.props.data,
        datasets: [
          {
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            label: "Followers",
            data: [],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
            ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Github followers",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
        fontSize: 25,
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Number of followers",
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "GithHub User login",
              },
            },
          ],
        },
      },
    };
  }
  componentDidMount() {
    this.callsForFirstTenUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        chartData: { ...this.state.chartData, labels: nextProps.data },
      });
      this.callsForFirstTenUsers();
    }
  }
  callsForFirstTenUsers() {
    this.props.data.forEach((element) => {
      axios.get(`https://api.github.com/users/${element}`).then((res) => {
        this.state.chartData.datasets[0].data.push(res.data.followers);
        console.log(this.state.chartData.datasets[0].data, res.data.followers);
      });
    });
  }

  render() {
    return (
      <div className="bar-chart">
        <Bar
          data={this.state.chartData}
          options={this.state.options}
          redraw={true}
        />
      </div>
    );
  }
}
export default BarChart;
