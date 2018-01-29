import React from 'react';
import { Link } from 'react-router';

const MyTasks = React.createClass({
	componentDidMount() {
		document.title = "My Task";
	},
	render() {

		return (
			<div className="my-tasks david-rica">
				<div className="container-inner">
					<Link to="/">
					<h2>David Ricardo</h2>
					<p>+62 812 8946 4536</p>
					<p>davidlikaldo@gmail.com</p>
					</Link>
				</div>
			</div>
		)
	}
});

export default MyTasks;