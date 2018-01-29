import React from 'react';
import mv1 from '../images/mv1.png';
import mv2 from '../images/mv2.png';
import mv3 from '../images/mv3.png';
import mv4 from '../images/mv4.png';

const MostVisited = React.createClass({
	render() {
		return (
			<div className="box box2 most-visited">
				<div className="box-title">
					<h3>Most Visited</h3>
					<i className="fa fa-close"></i>
				</div>
				<div className="box-content">
					<ul>
						<li>
							<div className="mv-list">
								<div><img src={mv1}></img></div>
								<div className="mv-title">Profile</div>
							</div>
						</li>
						<li>
							<div className="mv-list">
								<img src={mv2}></img>
								<div className="mv-title">Account Summary</div>
							</div>
						</li>
						<li>
							<div className="mv-list">
								<img src={mv3}></img>
								<div className="mv-title">Statement</div>
							</div>
						</li>
						<li>
							<div className="mv-list">
								<img src={mv4}></img>
								<div className="mv-title">In House Transfer</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
});

export default MostVisited;