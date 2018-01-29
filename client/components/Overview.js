import React from 'react';
import Chart from 'chart.js';

const Overview = React.createClass({
	componentDidMount() {
		/* Account Overview Chart 1 */
		var ctx = document.getElementById('chart1');
		var chart1 = new Chart(ctx, {
			type: 'doughnut',
		  data: {
		    datasets: [{
		    	data: [73, 27],
				  backgroundColor: [
				    '#5B9BD5',
				    '#EE7D30'
			    ]
		    }]
		  }
		});

		/* Account Overview Chart 2 */
		var ctx = document.getElementById('chart2');
		var chart2 = new Chart(ctx, {
			type: 'doughnut',
		  data: {
		    datasets: [{
		    	data: [89, 11],
				  backgroundColor: [
				    '#70AD47',
				    '#4472C4'
			    ]
		    }]
		  }
		});
	},

	render() {
		return (
			<div className="box box2 over-view">
				<div className="box-title">
					<h3>Account Overview</h3>
					<i className="fa fa-close"></i>
				</div>
				<div className="box-content">
					<div className="chart1">
						<div className="canvas">
							<canvas id="chart1" width="200" height="200"></canvas>
							<div className="graph-title">Assets</div>
							<div className="graph-date"><i>As of 20 February 2014</i></div>
						</div>
						<div className="chartDetail">
							<table className="ao-table-1">
								<thead>
								  <tr className="table-head">
								    <td><h4>My Bank</h4></td>
								    <td><h4>40 accounts</h4></td>
								    <td><h4>IDR</h4></td> 
								    <td><h4>800,000,000.00</h4></td>
								  </tr>
							  </thead>
							  <tbody>
								  <tr>
								    <td>Current</td>
								    <td>28 accounts</td>
								    <td></td>
								    <td></td>
								  </tr>
								  <tr>
								    <td>Saving</td>
								    <td>5 accounts</td>
								    <td></td>
								    <td></td>
								  </tr>
								  <tr>
								    <td>Time Deposit</td>
								    <td>2 accounts</td>
								    <td></td>
								    <td></td>
								  </tr>
								  <tr>
								    <td>External Bank</td>
								    <td>4 accounts</td>
								    <td>IDR</td>
								    <td>300,000,000.00</td>
								  </tr>
								  <tr>
								    <td>Assets</td>
								    <td>44 accounts</td>
								    <td>IDR</td>
								    <td>1,100,000,000.00</td>
								  </tr>
							  </tbody>
							</table>
						</div>
						<div className="clearfix"></div>
					</div>
					
					<div className="chart2">
						<div className="canvas">
							<canvas id="chart2" width="200" height="200"></canvas>
							<div className="graph-title">Liabilities</div>
							<div className="graph-date"><i>As of 20 February 2014</i></div>
						</div>
						<div className="chartDetail">
							<table className="ao-table-1">
								<thead>
								  <tr className="table-head">
								    <td><h4>Loan</h4></td>
								    <td><h4>2 accounts</h4></td>
								    <td><h4>IDR</h4></td> 
								    <td><h4>400,000,000.00</h4></td>
								  </tr>
							  </thead>
							  <tbody>
								  <tr>
								    <td>Credit Card</td>
								    <td>5 accounts</td>
								    <td>IDR</td>
								    <td>450,000,000.00</td>
								  </tr>
								  <tr>
								    <td>Liabilities</td>
								    <td>7 accounts</td>
								    <td>IDR</td>
								    <td>450,000,000.00</td>
								  </tr>
							  </tbody>
							</table>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="view-more">View More</div>
				</div>
			</div>
		)
	}
});

export default Overview;