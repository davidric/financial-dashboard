import React from 'react';

const ForexRate = React.createClass({
	render() {
		return (
			<div className="box box2 forex-rate">
				<div className="box-title">
					<h3>Forex Rate</h3>
					<i className="fa fa-close"></i>
				</div>
				<div className="box-content">
					<div className="content-title">
						<div className="ct-left">As of 20 February 2014</div>
					</div>
					<div className="clearfix"></div>
					<div className="frc-left">
						<table>
							<thead>
							  <tr className="table-head">
							    <td><h4>Currency</h4></td>
							    <td><h4>Buy</h4></td> 
							    <td><h4>Sell</h4></td>
							  </tr>
							</thead>
							<tbody>
							  <tr>
							    <td>USD</td>
							    <td>11,520.00</td>
							    <td>11,490.00</td>
							  </tr>
							  <tr>
							    <td>SGD</td>
							    <td>9,213.65</td>
							    <td>9,179.65</td>
							  </tr>
							  <tr>
							    <td>EUR</td>
							    <td>15,773.89</td>
							    <td>15,673.89</td>
							  </tr>
							  <tr>
							    <td>AUD</td>
							    <td>10,691.33</td>
							    <td>10,611.33</td>
							  </tr>
							  <tr>
							    <td>JPY</td>
							    <td>114.67</td>
							    <td>111.67</td>
							  </tr>
						  </tbody>
						</table>
					</div>
					<div className="frc-right">
						<ul>
							<li>View Complete Forex Rate</li>
							<li>View Interest Rate</li>
							<li>My Bank Product info</li>
							<li>ATM & Branch Location</li>
						</ul>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		)
	}
});

export default ForexRate;