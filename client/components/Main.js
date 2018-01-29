import React from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Main = React.createClass({
	render() {
		return (
			<div>
				<Header/>
				{React.cloneElement(this.props.children, this.props)}
				<Footer/>
			</div>
		)
	}
});

export default Main;