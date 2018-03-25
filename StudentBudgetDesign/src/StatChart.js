import React, {Component} from 'react';
import { Chart } from 'react-google-charts';
import './bootstrap_css/bootstrap.min.css';


class StatChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Monthly (Select Metric)',
        hAxis: { title: 'Month'},
        vAxis: { title: '$ Savings (or another metric name)'},
        legend: 'none',
      },
      data: [
        ['Age', '$'],
        ['Jan', 5000],
        ['Feb', 8000],
        ['Mar', 7000],
        ['Apr', 9000],
        ['May', 12000],
        ['Jun', 8000],
        ['Jul', 9000],
        ['Aug', 15000],
        ['Sep', 16000],
        ['Oct', 19000],
        ['Nov', 1000],
        ['Dec', 20000],

      ],
    };
  }
  render() {
    return (
      <Chart
      	div="col-md-6"
        chartType="LineChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="LineChart"
        width="50%"
        height="600px"
        legend_toggle
      />
    );
  }
}
export default StatChart;
