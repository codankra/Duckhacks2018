import React, { Component } from 'react';
import './MainBudgetTable.css';
class MainBudgetTable extends Component {
	render(){
		return(
			<table class="table-fill">				
				<thead>
					<h1 class="text-center">Month Name</h1> 
					<tr>
						<th class="text-left"></th>
						<th class="text-left">Target</th>
						<th class="text-left">Actual</th>
						<th class="text-left">Comments</th>
					</tr>
				</thead>
				<tbody class="table-hover">
					<tr>
						<td class="text-left">Housing</td>						
					</tr>
					<tr>
						<td class="text-left">Food</td>						
					</tr>
					<tr>
						<td class="text-left">Transportation</td>						
					</tr>
					<tr>
						<td class="text-left">Pocket Money</td>						
					</tr>
					<tr>
						<td class="text-left">Bills</td>						
					</tr>
				</tbody>
			</table>
		);
	}
}

export default MainBudgetTable;