// TODO Responsive format

import React from 'react';
// import styles from './info.module.css';
import styled from 'styled-components';
import { allInventoryItems } from './inventoryDataList';
import OrderSheet from '../../../components/OrderSheet/ordersheet';
import GarmentStyles from '../../../container/pages/GarmentStyles/garmentStyles';

function OrderPage (props) {
	let InfoData;
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
		InfoData = <OrderSheet id={props.match.params.id} data={allInventoryItems} />;
		garmentStyles = <GarmentStyles data={garmentStyles} />;
	} else {
		// This is where we show the garments filtered by type as well as display the relevent garment data
		tempData = allInventoryItems.filter((ele) => ele.caption === props.garmentType && ele.id > 13);
		// console.log("InfoData props do not match id TempData", tempData);
		InfoData = <OrderSheet />;
		garmentStyles = <GarmentStyles data={tempData} />;
	}
	// console.log('Info Page Data', tempData);
	return (
		<Wrapper>
			<OrderSection>
				<InfoSection>{InfoData}</InfoSection>
				<GarmentSection>{garmentStyles}</GarmentSection>
			</OrderSection>
			{/* <MeasureSection>
				<img src='http://www.teasewearproducts.com/images/forapp/measurediag.jpg' alt='measure diag'/>
			</MeasureSection>
			<button><h4>Add to Cart</h4></button> */}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	color: black;
	padding-top: 2em;

	@media (max-width: 1030px) {
		width: 100%;
		flex-direction: column;
		height: auto;
		padding: 0px;
	}
`;

const OrderSection = styled.section`
	display: flex;
	flex-direction: column;
`;
const InfoSection = styled.section`
	margin: 0em;
	padding: 2em;
	width: 100%;
	height: 500px;
	background: rgb(176, 197, 204);
	text-align: left;
	h1,
	h2,
	h3,
	h4,
	p {
		padding: 0em;
		margin: 0em;
		padding-top: .5em;
		margin-left: .5em;
		text-align: left;
	}
	@media (max-width: 1030px) {
		width: 100%;
		height: auto;
		border-radius: 0;
	}
`;

const GarmentSection = styled.section`
	margin: 0em;
	padding: 0em;
	height: 370px;
	max-width: 1024px;
	overflow-x: scroll;
	/* background:lightpink; */
	@media (max-width: 1030px) {
		flex-direction: row;
		width: 100%;
		height: 300px;
		flex-wrap: wrap;
	}
`;

const MeasureSection = styled.section`
	width: 30%;
	padding-top: 1em;
	text-align: center;
	height: auto;
	h3 {
		margin: 0px;
	}

	img {
		width: 400px;
		object-fit: fit;
	}

	@media (max-width: 1030px) {
		width: 100%;
		img {
			width: 375px;
			object-fit: contain;
		}
	}
`;
export default OrderPage;
