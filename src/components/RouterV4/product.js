import React from 'react';

// the parameters passed to products, in this case are:
// data[], history{}, location{}, match{},staticContent:
// we will destructuring to access these objects for the purpos of this excercise.
const Product = ({ data, match, history, location }) => {
	// These logs where implements to confirm my understanding of where match was located withing props
	//console.log("The value of Data is", data)
	//console.log("The value of history is", history)
	//console.log("The value of Location is", location)
	//console.log("The Value of Match is ", match)
	const product = data.find((ele) => ele.id == match.params.productId);
	var productData;

	if (product)
		productData = (
			<div>
				<h3> {product.name} </h3>
				<p>{product.description}</p>
				<hr />
				<h4>{product.status}</h4>{' '}
			</div>
		);
	else productData = <h2> Sorry. Product doesnt exist </h2>;

	return (
		<div>
			<div>{productData}</div>
		</div>
	);
};

export default Product;
