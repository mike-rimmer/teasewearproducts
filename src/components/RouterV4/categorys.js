import React from 'react';
import { Link, Route } from 'react-router-dom';
import Category from './category';

function Categorys ({ match }) {
	//console.log("Match", match)
	return (
		<div>
			<h1>In Category Page</h1>
			<ul>
				<li>
					<Link to={`${match.url}/shoes`}>Shoes</Link>
				</li>
				<li>
					<Link to={`${match.url}/boots`}>Boots</Link>
				</li>
				<li>
					<Link to={`${match.url}/footwear`}>Footwear</Link>
				</li>
			</ul>

			<Route path={`${match.url}/:name`} render={(props) => <Category />} />
		</div>
	);
}

export default Categorys;

// render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
//     {/* //console.log('Match', {match.params.name}) */}
