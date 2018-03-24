import React, { Component } from 'react';
import './bootstrap_css/bootstrap.min.css';
import './MonthSelection.css';

class MonthSelection extends Component{
	render(){
		return(
			<div class="btn-group" role="group" aria-label="Selector Buttons">
			  <button type="button" class="btn btn-primary" href="#jan">Jan</button>
			  <button type="button" class="btn btn-primary" href="#feb">Feb</button>
			  <button type="button" class="btn btn-primary" href="#mar">Mar</button>
			  <button type="button" class="btn btn-primary" href="#apr">Apr</button>
			  <button type="button" class="btn btn-primary" href="#may">May</button>
			  <button type="button" class="btn btn-primary" href="#jun">Jun</button>
			  <button type="button" class="btn btn-primary" href="#jul">Jul</button>
			  <button type="button" class="btn btn-primary" href="#aug">Aug</button>
			  <button type="button" class="btn btn-primary" href="#sep">Sep</button>
			  <button type="button" class="btn btn-primary" href="#oct">Oct</button>
			  <button type="button" class="btn btn-primary" href="#nov">Nov</button>
			  <button type="button" class="btn btn-primary" href="#dec">Dec</button>
			</div>
			);
	}
}
export default MonthSelection;
