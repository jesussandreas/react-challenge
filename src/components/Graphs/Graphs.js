import React, { Component } from 'react'

// Import graphs from chartjs
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import './Graphs.css';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            borderWidth: 0,
            label: 'Sales Per Day',
            data: [
              6194,
              3045,
              1060,
              10519,
              1162,
              9572,
              4072
            ],
            backgroundColor: [
              '#FFA177',
              '#55D8FE',
              '#FFDA83',
              '#FF6565',
              '#A3A0FB',
              '#FF8373',
              '#5EE2A0'
            ]
          }
        ]
      },
      pieData: {
        labels: ["Silk", "MuuMilk", "YuMilk", "Sick", "MyMilk", "NotAMilk"],
        datasets: [{
          borderWidth: 0,
          backgroundColor: [
            '#FF6565', 
            '#FF8373', 
            '#5EE2A0', 
            '#55D8FE', 
            '#A3A0FB', 
            '#FFDA83'
          ],
          data: [30, 10, 10, 20, 20, 10],
        }]
      },
      lineData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          borderWidth: 0,
          label: "Last Year",
          backgroundColor: '#ABABE6',
          borderColor: '##A3A0FB',
          data: [0, 10, 5, 14, 30, 40, 55],
        },
        {
          label: "New Year",
          backgroundColor: '#55D8FE',
          borderColor: '#75D2ED',
          data: [100, 104, 120, 80, 95, 80, 70],
        }]
      },
      chartOptions: {
        maintainAspectRatio: true,
        legend: {
          labels: {
            usePointStyle: true,
            fontSize: 14
          },
          position: 'bottom',
          fillStyle: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: '#EAF0F4',
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#EAF0F4',
            }
          }]
        }
      },
      pieOptions: {
        maintainAspectRatio: true,
        legend: {
          labels: {
            usePointStyle: true,
            fontSize: 14
          },
          position: 'bottom',
        }
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3 mb-3">
            <div className="graph__box">
              <Bar
                data={this.state.chartData}
                height={300}
                options={this.state.chartOptions}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3 mb-3">
            <div className="graph__box">
              <Doughnut
                data={this.state.pieData}
                options={this.state.pieOptions}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mt-3 mb-3">
            <div className="graph__box">
              <Line
                data={this.state.lineData}
                options={this.state.chartOptions}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Graph;