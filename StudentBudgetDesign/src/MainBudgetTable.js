import React, { Component } from 'react';
import './MainBudgetTable.css';
class MainBudgetTable extends Component {
	render(){
		return(
			<table class="table-fill">				
				<thead>
					<tr>
						<th class="text-left">monthName</th>
						<th class="text-left">Target</th>
						<th class="text-left">Actual</th>
						<th class="text-left">Comments</th>
					</tr>
				</thead>
				<tbody class="table-hover">
					<tr>
						<td class="text-left">Housing</td>
						<td class="">target</td>
						<td class="">actual</td>
						<td class="">comments</td>

					</tr>
					<tr>
						<td class="text-left">Food</td>		
						<td class="">target</td>
						<td class="">actual</td>
						<td class="">comments</td>

					</tr>
					<tr>
						<td class="text-left">Transportation</td>
						<td class="">target</td>
						<td class="">actual</td>
						<td class="">comments</td>				
					</tr>
					<tr>
						<td class="text-left">Pocket Money</td>
						<td class="">target</td>
						<td class="">actual</td>
						<td class="">comments</td>				
					</tr>
					<tr>
						<td class="text-left">Bills</td>
						<td class="">target</td>
						<td class="">actual</td>
						<td class="">comments</td>					
					</tr>
					<tr>
						<td class="text-left">Savings</td>
						<td class="">target</td>
						<td class="">actual</td>
						<td class="">comments</td>					
					</tr>
				</tbody>
			</table>
		);
	}
}

export default MainBudgetTable;