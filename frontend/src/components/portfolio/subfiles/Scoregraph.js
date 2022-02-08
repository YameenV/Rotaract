import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import "../../../css/portfolio.css"
class Scoregraph extends Component {
        state = {
            options: {
              colors : ['#FF2020', '#FF5555'],
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
            <div className='pro-chart_div'>
                <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                width="100%"
                height="100%"
                />
                <div className='pro-chart-upper'>
                  <h1>Loading soon ...</h1> 
                </div>
            </div>
        )
    }
}
export default Scoregraph