import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Categorys from './components/RouterV4/categorys';
import Products from './components/RouterV4/products';

export default RouterAppExample;

function Home () {
	return <h1>Home</h1>;
}

function RouterAppExample () {
	// //console.log('Route object', { Route });
	return (
		<div>
			<h1>Router App Example</h1>;
			<nav>
				<ul>
					<li>
						{/* <link is used to navigate between pages similar to the 'a' tag. By using the <Link> component we avoid the page refresh we experience when using the 'a' tag
                     */}
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/category'>Category</Link>
					</li>
					<li>
						<Link to='/products'>Product</Link>
					</li>
				</ul>
			</nav>
			{/* The route is the most important component in React router-dom. It renders some UI (component if the current location in 'match'es the route's path.) */}
			<Route exact path='/' component={Home} />
			<Route path='/category' component={Categorys} />
			<Route path='/products' component={Products} />
			<Route
				path='/:id'
				render={() => (
					<p>This will show up for all routes other than '/' (Home), ie: '/products' and '/category </p>
				)}
			/>
		</div>
	);
}
