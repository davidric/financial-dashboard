import React from 'react';

const Payebles = React.createClass({
	render() {
		return (
			<div className="box box2">
				<div className="box-title">
					<h3>Payebles</h3>
					<i className="fa fa-close"></i>
				</div>
				<div className="box-content">
					<div className="content-title">
						<div className="ct-left">Number of Transaction (15)</div>
						<div className="ct-right">Total Amount (IDR 80,000,000,00)</div>		
					</div>
					<div className="clearfix"></div>
					<table className="payebles-table">
						<thead>
						  <tr className="table-head">
						    <td><h4>Description</h4></td>
						    <td><h4>Amount</h4></td>
						    <td><h4>Beneficiary</h4></td> 
						    <td><h4>Due</h4></td>
						  </tr>
					  </thead>
					  <tbody>
						  <tr>
						    <td>INV101 - eInvoice</td>
						    <td>IDR 30,000,000</td>
						    <td>PT.ABC</td>
						    <td>1-Mar-14</td>
						  </tr>
						  <tr>
						    <td>201401239089 - Single Transfer</td>
						    <td>USD 800</td>
						    <td>John Lenon</td>
						    <td>1-Mar-14</td>
						  </tr>
						  <tr>
						    <td>201401231189 - Bill Payement</td>
						    <td>IDR 2,000,000</td>
						    <td>Telkomsel</td>
						    <td>30-Mar-14</td>
						  </tr>
						  <tr>
						    <td>CHQ2014 - Incoming Cheque</td>
						    <td>IDR 10,000,000</td>
						    <td>PT.XYZ</td>
						    <td>5-Apr-14</td>
						  </tr>
						  <tr>
						    <td>2014022300189 - Tax Payment</td>
						    <td>IDR 8,700,000</td>
						    <td>DJP</td>
						    <td>5-Apr-14</td>
						  </tr>
					  </tbody>
					</table>
					<div className="dropdown-box">
						<select>
							<option value="">Create Payable</option>
						</select>
					</div>
					<div className="view-more">View More</div>
				</div>
			</div>
		)
	}
});

export default Payebles;