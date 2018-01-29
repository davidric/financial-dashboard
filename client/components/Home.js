import React from 'react';
import { Link } from 'react-router';
import Identity from './Identity';
import Receivables from './Receivables';
import Payables from './Payables';
import Overview from './Overview';
import MostVisited from './MostVisited';
import ForexRate from './ForexRate';
import ProfitLoss from './ProfitLoss';

const Home = React.createClass({
	componentDidMount() {
		document.title = "Aprisma Dashboard";
	},
	render() {
		return (
			<div className="homepage">
				<div className="container">
					<div className="section1">
						<div className="container-inner">
							<div className="s1-1"><h1>Dashboard</h1></div>
							<div className="s1-2">Last login: Saturday Jan 22, 2015 14:02:14</div>
							<div className="s1-3"><i className="fa fa-gear"></i>&nbsp;&nbsp;Customize Dashboard</div>
						</div>
					</div>
					<div className="clearfix"></div>
					<div className="section2">
						<div className="s2-left">
							<div className="pannel"><Identity/></div>
							<div className="pannel"><Overview/></div>
							<div className="pannel"><MostVisited/></div>
							<div className="pannel"><ForexRate/></div>
						</div>
						<div className="s2-right">
							<div className="pannel"><Receivables/></div>
							<div className="pannel"><Payables/></div>
							<div className="pannel"><ProfitLoss/></div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		)
	}
});

export default Home;