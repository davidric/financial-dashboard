import React from 'react';
import { Link } from 'react-router';
import FooterLogo from '../images/FooterLogo.png';

const Footer = React.createClass({
	render() {
		return (
			<div className="footer">
				<div className="footer-top">
					<div className="container">
						<div className="ft-left">
							<ul>
								<li className="active"><Link to="/">Bahasa Indonesia</Link></li>
								<li><Link to="/">English</Link></li>
							</ul>
						</div>
						<div className="ft-right">
							<ul>
								<li><Link to="/">Rates</Link></li>
								<li><Link to="/">Terms & Conditions</Link></li>
								<li><Link to="/">Privacy Policy</Link></li>
								<li><Link to="/">Help</Link></li>
								<li><Link to="/">Contact Us</Link></li>
							</ul>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="footer-logo">
							<img src={FooterLogo}/>
						</div>
						<div className="fb-text">
							<p>MyBank Internet Business is Service mark of PT.MyBank, Tbk</p>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.</p>
						</div>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		)
	}
});

export default Footer;