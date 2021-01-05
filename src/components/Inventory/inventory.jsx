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
		// caption !== 'All' ? setHide(!hide) :
		// e.target.className+="active"
		// console.log(e.target)
		setActive(!active)
	}

	const inventoryItems = inventoryTypes.map((ele) => {
		return <GarmentMenuItem key={ele} name={ele} caption={ele} qty={calcQty(ele)} onClick={clickHandler} active = {active}/>;
	});
	
	return (
		<InventorySection >
			<InventoryMenu>
				<h4>Garment Selection and Styles</h4>
				<ShowInventoryMenu display={!hide} >{inventoryItems}</ShowInventoryMenu> 
			</InventoryMenu>
			<InventoryPhotos>
				<NewLookPhotos data={data} garmentStyle={data === 'All' ? 'Show' : ''} onclick={clickHandler} />
			</InventoryPhotos>
		</InventorySection>
	);
}

const InventorySection = styled.section`
	display: grid;
	grid-template-columns: 1fr ;
	grid-template-areas:
	'menu'
	'photo'; 
	width:100%;
	height:auto;
	/* justify-content:space-between; */
	@media(min-width:1030px){
	margin-top:3em;
	grid-template-columns: 1fr  1fr;
	grid-template-rows: 450px;
	overflow-y:hidden;
	grid-gap:10em;
	grid-template-areas:
	'menu   photo ',
	}
`;

const InventoryMenu = styled.section`
grid-area:menu;
background-color:#bbb;
height:auto;
overflow-y:scroll;
    h4{
		font-size:1em;
		padding-top:1em;
		padding-left:.5em;
		text-align:center;
	}
	flex: 1, 1, 100%;
	@media(min-width:1030px){
		margin-left:8em;
	}
	`;

const ShowInventoryMenu = styled.section`
	 display: ${props => props.display ? 'display': 'none'};	
`;

const InventoryPhotos = styled.section`
grid-area:'photo';
display:flex;
margin-left: calc(50% - 25%);
	justify-content:center;
	text-align:center;
	background-color:lightblue;
	width:400px;
	height:460px;
	margin-bottom:5em;
	overflow-x:scroll;
	scroll-snap-type: x mandatory;
    img{
		scroll-snap-align:center;
		max-width:100%;
		height:auto;

	}
@media(min-width:1030px){
	display:flex;
	justify-content:center;
	text-align:center;
	background-color:lightblue;
	width:400px;
	height:460px;
	margin-bottom:5em;
	overflow-x:scroll;
	scroll-snap-type: x mandatory;
	img{
		scroll-snap-align:center;
	    
	}
	}
`
export default Inventory;
