import React from 'react';

const Receivables = React.createClass({
	render() {
		return (
			<div className="box box2">
				<div className="box-title">
					<h3>Receivables</h3>
					<i className="fa fa-close"></i>
				</div>
				<div className="box-content">
					<div className="content-title">
						<div className="ct-left">Number of Transaction (20)</div>
						<div className="ct-right">Total Amount (IDR 200,000,000,00)</div>		
					</div>
					<div className="clearfix"></div>
					<table>
						<thead>
						  <tr className="table-head">
						    <td><h4>Description</h4></td>
						    <td><h4>Amount</h4></td> 
						    <td><h4>Due</h4></td>
						  </tr>
						</thead>
						<tbody>
						  <tr>
						    <td>INV101 - PT.ABC</td>
						    <td>IDR 50,000,000</td>
						    <td><div className="red">21-Jan-14</div></td>
						  </tr>
						  <tr>
						    <td>INV059 - Corporate ltd</td>
						    <td>USD 1,000</td>
						    <td>1-Mar-14</td>
						  </tr>
						  <tr>
						    <td>INV099 - PT. Company Indonesia</td>
						    <td>IDR 89,000,000</td>
						    <td>30-Mar-14</td>
						  </tr>
						  <tr>
						    <td>CHQ2014 - Incoming Cheque</td>
						    <td>IDR 10,000,000</td>
						    <td>5-Apr-14</td>
						  </tr>
						  <tr>
						    <td>2014022300189 - Autodebit</td>
						    <td>IDR 8,700,000</td>
						    <td>5-Apr-14</td>
						  </tr>
					  </tbody>
					</table>
					<div className="dropdown-box">
						<select>
							<option value="">Create Receivable</option>
						</select>
					</div>
					<div className="view-more">View More</div>
				</div>
			</div>
		)
	}
});

export default Receivables;