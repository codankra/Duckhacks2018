import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainBudgetTable from './MainBudgetTable';
import MonthSelection from './MonthSelection';
import StatChart from './StatChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MonthSelection />
        <MainBudgetTable />
        <StatChart />
      </div> 
          );
  }
}

export default App;
