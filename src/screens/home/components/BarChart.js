import React from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
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
    };
  }
  componentDidMount() {
    console.log("mount");
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    console.log("update");
    this.getFirstTenUsers();
    this.callsForFirstTenUsers();
  }

  getFirstTenUsers() {
    this.state.chartData.labels = this.props.data
      .map((login) => login.login)
      .slice(0, 10);
  }
  callsForFirstTenUsers() {
    this.state.chartData.labels.forEach((element) => {
      axios.get(`https://api.github.com/users/${element}`).then((res) => {
        this.state.chartData.datasets[0].data.push(res.data.followers);
        console.log(res.data.followers);
      });
    });
  }

  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Github followers",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
            height: 150,
            width: 300,
            fontSize: 25,
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}
export default BarChart;
