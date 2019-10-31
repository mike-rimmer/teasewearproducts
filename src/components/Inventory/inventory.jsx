import React, { useState } from 'react';
import NewLookPhotos from '../newlookphotos';
import  GarmentMenuItem from '../garmentitem'
import styled from 'styled-components';
import { allInventoryItems, inventoryTypes } from '../../container/pages/OrderPage/inventoryDataList'

import {
	// garments,
	cooling,
	diapers,
	bellybands,
	splashpants,
	snoods,
	bibs,
	wintercoats,
	hats,
	bodysocks,
	warmingcoats,
	raincoats,
	pyjamas,
	peewraps
	// TODO:Reconcile XremoveGarmentPage
} from '../../container/pages/XremoveGarmentPage/garmentData';



function Inventory (props) {
	function calcQty (ele) {
		// console.log("In CalcQty:", ele)
		let qty = 0;
		switch (ele) {
			case 'All':
				qty = allInventoryItems.length - (inventoryTypes.length + 1);
				break;
			case 'Cooling Coats':
				qty = cooling.length;
				break;
			case 'Diapers':
				qty = diapers.length;
				break;
			case 'Belly Bands':
				qty = bellybands.length;
				break;
			case 'Splash Pants':
				qty = splashpants.length;
				break;
			case 'Snoods':
				qty = snoods.length;
				break;
			case 'Bibs':
				qty = bibs.length;
				break;
			case 'Winter Coats':
				qty = wintercoats.length;
				break;
			case 'Hats':
				qty = hats.length;
				break;
			case 'Body Socks':
				qty = bodysocks.length;
				break;
			case 'Warming Coats':
				qty = warmingcoats.length;
				break;
			case 'Rain Coats':
				qty = raincoats.length;
				break;
			case 'Pyjamas':
				qty = pyjamas.length;
				break;
			case 'Pee Wraps':
				qty = peewraps.length;
				break;
			default:
				qty = 0;
		}

		return qty;
	}

	const [ data, setData ] = useState(props.data);
	const [active, setActive] = useState(false)
	const [hide, setHide] = useState(false)
	function clickHandler (caption, active, e) {
		setData(caption);
		caption !== 'All' ? setHide(!hide) :
		// e.target.className+="active"
		console.log(e.target)
		setActive(!active)
	}

	const menuItems = inventoryTypes.map((ele) => {
		return <GarmentMenuItem key={ele} name={ele} caption={ele} qty={calcQty(ele)} onClick={clickHandler} active = {active}/>;
	});

	return (
		<InventorySection >
			<InventoryMenu>
				{/* <h4>Garment Selection and Styles</h4> */}
				<ShowInventoryMenu display={!hide} >{menuItems}</ShowInventoryMenu> 
			</InventoryMenu>
			<InventoryPhotos>
				<NewLookPhotos data={data} garmentStyle={data === 'All' ? 'Show' : ''} onclick={clickHandler} />
			</InventoryPhotos>
		</InventorySection>
	);
}

const InventorySection = styled.section`
	display:grid;
	width:100%;
	grid-template-columns: minmax(400px, 100vw);
	grid-template-rows: minmax(400px, 600px) minmax(400px, 600px);
	grid-template-areas:
	'menu'
	'photo'; 
	
`;
const InventoryMenu = styled.section`
    grid-area: menu;
    width:100%;
    h4{
		font-size:1em;
		padding-left:.5em;
	}
	/* @media(min-width:1030px){
		width:50%;
	} */
	`;

const ShowInventoryMenu = styled.section`
	 display: ${props => props.display ? 'display': 'none'};
	  background-color:yellow;
`;

const InventoryPhotos = styled.section`
	grid-area:photo;
	width:400px;
	height:550px;
	overflow-y:scroll;
    /* display:flex; */
	width:100%;
	background-color:lightgray;
	/* flex-direction:row; */
	/* overflow-y:scroll;
	height:auto;
	max-height:370px;
	text-align:center;
	padding-top:.5em;
	margin-bottom:1em; */
	/* &img{
		margin:1em;
		width:250px;
		margin:0 auto;
		object-fit:scale-down;
		/* max-height:200px; */


	/* @media(min-width:1030px){
		width:50%;
		height:350px;
		margin-left:15em;
		margin-right:15em;
		flex-direction:column;
		flex-wrap:wrap;
		overflow-y:scroll;
		align-items:center;
	   /* max-height:40px; */
	   /* background-color:red;
	   

	
	} */ 
`
export default Inventory;
