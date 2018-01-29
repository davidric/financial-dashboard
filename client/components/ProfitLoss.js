import React from 'react';
import Chart from 'chart.js';

const ProfitLoss = React.createClass({
	componentDidMount() {
		/* Profit and Loss Chart */
		var ctx = document.getElementById("chart3");
		var chart3 = new Chart(ctx, {
	    type: 'bar',
	    data: {
	      labels: ["Sep-13", "Oct-13", "Nov-13", "Dec-13", "Jan-14", "Feb-14"],
	      datasets: [
	      {
	        label: 'Cash In',
	        data: [430000, 500000, 69000, 290000, 900000, 530000],
	        backgroundColor: [
		        'rgba(54, 162, 235, 0.2)',
		        'rgba(54, 162, 235, 0.2)',
		        'rgba(54, 162, 235, 0.2)',
		        'rgba(54, 162, 235, 0.2)',
		        'rgba(54, 162, 235, 0.2)',
		        'rgba(54, 162, 235, 0.2)'
	        ],
	        borderColor: [
		        'rgba(54, 162, 235, 1)',
		        'rgba(54, 162, 235, 1)',
		        'rgba(54, 162, 235, 1)',
		        'rgba(54, 162, 235, 1)',
		        'rgba(54, 162, 235, 1)',
		        'rgba(54, 162, 235, 1)'
	        ],
	        borderWidth: 1
	      },
	      {
	        label: 'Cash Out',
	        data: [320000, 380000, 100000, 150000, 400000, 230000],
	        backgroundColor: [
	          'rgba(255, 99, 132, 0.2)',
	          'rgba(255, 99, 132, 0.2)',
	          'rgba(255, 99, 132, 0.2)',
	          'rgba(255, 99, 132, 0.2)',
	          'rgba(255, 99, 132, 0.2)',
	          'rgba(255, 99, 132, 0.2)'
	        ],
	        borderColor: [
	          'rgba(255,99,132,1)',
	          'rgba(255,99,132,1)',
	          'rgba(255,99,132,1)',
	          'rgba(255,99,132,1)',
	          'rgba(255,99,132,1)',
	          'rgba(255,99,132,1)'
	        ],
	        borderWidth: 1
	      }
	      ]
	    },
	    options: {
	      scales: {
	        yAxes: [{
	          ticks: {
	            beginAtZero:true
	          }
	        }]
	      }
	    }
		});
	},
	
	render() {
		return (
			<div className="box box2 profit-loss">
				<div className="box-title">
					<h3>Profit and Loss</h3>
					<i className="fa fa-close"></i>
				</div>
				<div className="box-content">
					<div className="bar-chart">
						<canvas id="chart3" width="100%" height="87%"></canvas>
					</div>
					<div className="dropdown-box">
						<select>
							<option value="">Financial Report</option>
						</select>
					</div>
					<div className="view-more">View More</div>
				</div>
			</div>
		)
	}
});

export default ProfitLoss;