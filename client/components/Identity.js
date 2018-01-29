import React from 'react';
import img01 from '../images/img01.png';

const Identity = React.createClass({
	render() {
		return (
			<div className="box box1">
				<img src={img01}/>
				<div className="ide01">
					<h2>PT. Aprisma Indonesia</h2>
					<h2>Welcome, <span className="ideName">Jeremy Brown</span></h2>
					<span>Thursday, February 21, 2014</span>
					<div className="ide01-01"><i className="fa fa-envelope-o"></i>&nbsp;<span>1</span>&nbsp;new Messages</div>
					<div className="ide01-02"><i className="fa fa-hourglass-half"></i>&nbsp;<span>3</span>&nbsp;Pending Task</div>
					<div className="view-more">View More</div>
				</div>
			</div>
		)
	}
});

export default Identity;