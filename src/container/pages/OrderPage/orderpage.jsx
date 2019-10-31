// TODO Responsive format

import React from 'react';
// import styles from './info.module.css';
import styled from 'styled-components';
import { allInventoryItems } from './inventoryDataList';
import OrderDetails from '../../../components/orderdetail'
import GarmentStyles from '../GarmentStyles/garmentStyles';

function OrderPage (props) {
	let OrderData;
	let tempData;
	let garmentStyles;
	let persistGarment;
	// if we receive an id we find the garment style and pass the info to InfoSheet
	if (props.match.params.id) {
		tempData = allInventoryItems.find((ele) => ele.id.toString() === props.match.params.id);
		// console.log("Tempdata", tempData.caption)
		persistGarment = tempData.caption;
		garmentStyles = allInventoryItems.filter((ele) => ele.caption === persistGarment && ele.id > 13);
		// console.log("InfoData props match id TempData", tempData);
		OrderData = <OrderDetails id={props.match.params.id} data={allInventoryItems} />;
		garmentStyles = <GarmentStyles data={garmentStyles} />;
	} else {
		// This is where we show the garments filtered by type as well as display the relevent garment data
		tempData = allInventoryItems.filter((ele) => ele.caption === props.garmentType && ele.id > 13);
		// console.log("InfoData props do not match id TempData", tempData);
		OrderData = <OrderDetails data={props.garmentType}/>;
		garmentStyles = <GarmentStyles data={tempData} />;
	}
	// console.log('Info Page Data', tempData);
	return (
		<OrderWrapper>
			<OrderSection>
				<InfoSection>{OrderData}</InfoSection>
				<GarmentSection>{garmentStyles}</GarmentSection>
			</OrderSection>
			{/* <button><h4>Add to Cart</h4></button> */}
			<MeasureSection>
				<img src='http://www.teasewearproducts.com/images/forapp/measurediag.jpg' alt='measure diag'/>
			</MeasureSection>
		</OrderWrapper>
	);
}

const OrderWrapper = styled.section`
	display:grid;
	grid-template-columns:1fr;
	/* grid-template-rows : minmax(400px,50vh) minmax(600px,50vh);  */
	grid-template-rows : auto, 1fr;  
	grid-template-areas:
	'measure'
	'ordersec';
	color: black;

	
	/* @media (min-width: 1030px) {
		grid-template-columns:1fr 1fr;
		grid-template-rows: auto minmax(400px,50%);
		grid-template-areas:
		'ordersec ordersec'
		'measure measure';
		width: 100%;
		flex-direction: column;
		height: auto;
		padding: 0px;
	} */
`;

const OrderSection = styled.section`
    grid-area : ordersec;
	display: grid;
	grid-template-columns:1fr;
	grid-template-rows: minmax(400px, 50vh) minmax(550px, 50vh);
	grid-template-areas:
	'info'
	'garments';

`;

const InfoSection = styled.section`
	grid-area:info;
	margin-top:2em;
	padding: .5em;
	background: rgb(176, 197, 204);
	text-align: left;
	h3{
		font-size:.9em;
		margin:0 0 .4em 0;
	}
	h4{
		font-size:1em;
	  	margin:0 0 .5em 0;
		  
	}
	p {
		text-align: left;
		font-size:.8em; 
		margin:0 0 .5em 0;
	}
	@media (min-width: 1030px) {
		width: 100%;
		height: auto;
		border-radius: 0;
	
	}
`;

const GarmentSection = styled.section`
    grid-area:garments;
	overflow-x: scroll;

`;

const MeasureSection = styled.section`
    img{
		width:100%;
		object-fit:contain;
	}



`;
export default OrderPage;
