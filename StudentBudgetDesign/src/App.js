import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainBudgetTable from './MainBudgetTable';
import MonthSelection from './MonthSelection';
import StatChart from './StatChart';

import './bootstrap_css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <br /><br />
        <MonthSelection />
        <br /><br />
        <MainBudgetTable />
        <br /><br />
        <div className="row">
          <StatChart className="col-md-6 col-sm-6 col-xs-6" />
        </div>
      </div> 
          );
  }
}

export default App;
