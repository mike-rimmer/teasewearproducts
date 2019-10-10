import React from 'react';
import { Link, Route } from 'react-router-dom';
import productsData from './productsData';
import Product from './product';
/* Import statements have been left out for code brevity */

// Here we winkle out match from props using destructuring
function Products ({ match }) {
	// / Create an array of `<li>` items for each product
	//console.log('Product Data', productsData);

	var linkList = productsData.map((product) => {
		return (
			<li>
				<Link to={`${match.url}/${product.id}`}>{product.name}</Link>
			</li>
		);
	});

	return (
		<div>
			<div>
				<nav>
					<h3> Products</h3>
					<ul> {linkList} </ul>
				</nav>
			</div>

			<Route path={`${match.url}/:productId`} render={(props) => <Product data={productsData} {...props} />} />
			<Route exact path={match.url} render={() => <div>Please select a product.</div>} />
		</div>
	);
}
export default Products;
