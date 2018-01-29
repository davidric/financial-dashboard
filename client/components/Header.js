import React from 'react';
import profilePicture from '../images/user3.png';
import { Link } from 'react-router';

const Header = React.createClass({
	render() {
		return (
			<div className="header">
				<div className="header-top">
					<div className="container-inner">
						<div className="logo">
							<div className="logo-01">wirecard</div>
							<div className="logo-02">internet</div>
						</div>
						<div className="user-session">
							<div className="name-id">
								<div className="name">Jeremy Brown</div>
								<div className="user-id">PT.Aprisma - ID237519</div>
							</div>
							<div className="profile-picture">
								<img src={profilePicture} alt="user"/>
							</div>
							<div className="notification"><i className="fa fa-bell-o" aria-hidden="true"></i><i className="fa fa-circle circle-user"></i></div>
							<div className="sign-out">
								<i className="fa fa-sign-out"></i>
								Sign Out
							</div>
						</div>
					</div>
				</div>
				<div className="header-bottom">
					<div className="container-inner">
						<div className="hb-left">
							<ul>
								<Link to="/"><li className="active home-tab"><i className="fa fa-home"></i></li></Link>
								<Link to="/mytasks"><li>My Tasks</li></Link>
								<li>Accounts <i className="fa fa-sort-down"></i></li>
								<li>Transactions <i className="fa fa-sort-down"></i></li>
								<li>Transfers <i className="fa fa-sort-down"></i></li>
								<li>Payments <i className="fa fa-sort-down"></i></li>
								<li>Liquidity <i className="fa fa-sort-down"></i></li>
							</ul>
						</div>
						<div className="hb-right">
							<ul>
								<li>Utilities <i className="fa fa-sort-down"></i></li>
								<li>Help <i className="fa fa-sort-down"></i></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		)
	}
});

export default Header;