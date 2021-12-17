import React, { Component } from 'react'
import Chart from 'react-apexcharts'
class Scoregraph extends Component {
        state = {
            options: {
              chart: {
                id: "basic-bar",
                type: "bar",
              },
              stroke: {
                curve: 'straight',
              },
              xaxis: {
                categories: ["January", "Febraury", "March", "April", "May", "June", "July"],
                labels: {
                  style: {
                    colors: "black",
                  },
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: "#black",
                  },
                },
              },
              grid: {
                show: false,
                position: "front",
                borderColor: "black",
              },
              dataLabels: {
                enabled: false,
              },
              theme: {
                palette: "palette1", // upto palette10
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
            },
            series: [
              {
                name: "series-1",
                data: [30, 40, 45, 50, 10 ,20],
              },
            ]
        }
    

    render() {
        return (
            <div>
                <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                width="400"
                />
            </div>
        )
    }
}
export default Scoregraph