import React, { useState, useEffect } from 'react';
import SizeButton from './sizebutton';
import InputType from './InputType';
import styled from 'styled-components';
import { size, coolingcoats } from '../container/pages/OrderPage/InfoSizeChart';

// About:  Info sheet is used by OrderPage to show a summary the selected garment, It includes Order Cose, Description, Price, Material and Garment measurements.

function OrderDetail (props) {
	const [ qty, setQty ] = useState();
	const [ totalPrice, setTotalPrice ] = useState('0');
	const [ select, setSelect ] = useState('XXS');

	// console.log("Info Sheet Props", props);

	const ChangeHandler = (e) => {
		const num = parseInt(e.target.value);
		if (num) {
			setQty(num);
			setTotalPrice(num ? num * data.price : 1 * data.price);
		}
	};

	const OnKeyDownHandler = (e) => {
		if (e.keyCode === 8) {
			console.log(`The current value of qty is ${qty}`);
			setQty('1');
		}
	};

	const handleSelectEvent = (e) => {
		// alert('Called')
		const value = e.target.value;
		setSelect(value);
		var index = size.indexOf(value);
		console.log(`This is the selected size ${value}`);

		data.price = coolingcoats[index];
		console.log(`The new price is ${data.price}`);
	};

	// useEffect(()=>{
	// 	setTotalPrice(data.price * qty)
	// },[select])

	let data;
	if (props.id) {
		data = props.data.find((ele) => ele.id.toString() === props.id);
		// console.log('In InfoSheet Data... heres the data to play with', data)
		return (
			<Wrapper>
				<h4>Info Sheet</h4>
				<h3>Order Code: {data.id}</h3>
				<h3>Description {data.caption} </h3>
				<p>{data.desc}</p>
				<h3>Price: ${data.price}.00</h3>
				<h3>Material:</h3>
				<p>{data.material}</p>
				<h3>Style:</h3>
				<p>{data.style}</p>
				<SizeButton handleSelectEvent={handleSelectEvent} select={select} />
				<InputType label='Qty:' onchange={ChangeHandler} keyDown={OnKeyDownHandler} />
				<h4>Total Price: ${totalPrice}.00</h4>
			</Wrapper>
		);
	} else {
		return (
			<Wrapper>
				<h3>Info Sheet</h3>
				<h4>Order Code: </h4>
				<h4>Description </h4>
				{/* <p>{data.desc}</p> */}
				<h4>Price: </h4>
				<h4>Material</h4>
				<h4>Measurements:</h4>
				{/* <SizeButton onChange={handleSelectEvent} /> */}
			</Wrapper>
		);
	}
}

export default OrderDetail;

const Wrapper = styled.div`
width:100%;
	/* input{
	height:.8em;
	size:2;
	padding:.2em;
	} */
`;
