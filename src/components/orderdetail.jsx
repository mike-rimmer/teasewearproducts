import React, { useState, useEffect }from 'react'
import SizeButton from './sizebutton'
import InputType from './InputType'
import styled from 'styled-components'
import {size, coolingcoats} from '../container/pages/InfoPage/InfoSizeChart'

// About:  Info sheet is used by Infopage to show a summary the selected garment, It includes Order Cose, Description, Price, Material and Garment measurements.


 function OrderDetail(props) {
	const [qty, setQty] = useState()
	const [totalPrice, setTotalPrice] = useState('0')
	const [select, setSelect] = useState('XXS')

	// console.log("Info Sheet Props", props);


	const ChangeHandler = (e) =>{
		const num =  parseInt(e.target.value);
		if(num){
			setQty(num)
			setTotalPrice(num ? num * data.price: 1 * data.price)
		}
	
	}

	const OnKeyDownHandler = (e)=>{
		if (e.keyCode === 8){
			console.log(`The current value of qty is ${qty}`)
			setQty('1');
		}
	}

	const handleSelectEvent = (e) =>{
	    // alert('Called')
		const value = e.target.value;
		setSelect(value);
		var index = size.indexOf(value);
		console.log(`This is the selected size ${value}`)
		
				data.price = coolingcoats[index]
				console.log(`The new price is ${data.price}`)
		
	}

	// useEffect(()=>{
	// 	setTotalPrice(data.price * qty) 
	// },[select])

	
	let data;
	if (props.id) {
		data = props.data.find((ele) => ele.id.toString() === props.id);
		// console.log('In InfoSheet Data... heres the data to play with', data)
		return (
			<Wrapper>
					<h3>Info Sheet</h3>
					<h4>Order Code: {data.id}</h4>
					<h4>Description {data.caption} </h4>
					<p>{data.desc}</p>
					<h4>Price: {data.price}.00</h4>
					<h4>Material:</h4>
					<p>{data.material}</p>
					<h4>Style:</h4>
					<p>{data.style}</p>
                <SizeButton handleSelectEvent ={handleSelectEvent} select ={select}/>
					<InputType label = 'Qty:'  onchange = {ChangeHandler} keyDown={OnKeyDownHandler}/>
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
                <SizeButton onChange = {handleSelectEvent} />
				
				</Wrapper>
		);
	}
}

export default OrderDetail;

const Wrapper = styled.div`
margin:0em;
padding:0em;
h3, h4, p{
	margin:.2em;
	padding:0em;
}
`
