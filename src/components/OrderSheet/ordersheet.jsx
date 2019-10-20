import React, { useState } from 'react';
import { GarmentItem, NewLookPhotos } from '../components';
import styled from 'styled-components';
import { allInventoryItems, inventoryTypes } from '../../container/pages/InfoPage/inventoryDataList';
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
} from '../../container/pages/XremoveGarmentPage/garmentData';

function OrderSheet (props) {
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
				qty = 0
		}

		return qty;
	}

	const [ data, setData ] = useState(props.data);

	function clickHandler (caption, e) {
		setData(caption);
	}

	const inventory = inventoryTypes.map((ele) => {
		return <GarmentItem key={ele} name={ele} caption={ele} qty={calcQty(ele)} onClick={clickHandler} />;
	});

	const currency = [1.00,2.00,3.00,4.00]
	const animals = ['cats', 'dogs', 'cats']
	const garments = [
		{name:'coats', qty:10},
		{name :'shoes', qty:5},
		{name : 'coats',qty:20}
	]
	

	const array = garments.map( ele => {
	 var count
	 var obj
		if (ele.name ==='coats'){
		obj[ele.name] = ele.qty
		}
      
	}) 
	

 

	// .reduce((tally, fruit)=>
	// {
	//  if (!tally[fruit]){
	// 	 tally[fruit] =1
	//  }else{
	// 	 tally[fruit] = tally[fruit] + 1
	//  }

	// 	// Shortcut
	// 	//    tally[fruit] =(tally[fruit] || 0) + 1
	//   return tally

	// },{})

	console.log('Here is the reduced array', array)
	return (
		<Inventory>
			<InventoryMenu>
				<h4>Garment Selection</h4>
				<ShowInventory>{inventory}</ShowInventory>
			</InventoryMenu>
			<InventoryPhotos>
				<NewLookPhotos data={data} garmentStyle={data === 'All' ? 'Show' : ''} />
			</InventoryPhotos>
		</Inventory>
	);
}

const Inventory = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;
	@media (max-width: 1030px) {
		flex-direction: column;
	}
`;
const InventoryMenu = styled.section`
	margin: 0px;
	margin-top: 40px;
	/* grid-area: 'sb'; */
	min-width: 270px;
	height: 580px;
	background: rgba(200, 200, 200, .2);
	width: 25%;
	h4 {
		text-align: center;
	}
	@media (max-width: 1030px) {
		display: flex;
		width: 100%;
		height: auto;
		flex-direction: row;
		flex-wrap: wrap;
		h4 {
			padding-left: 1em;
			text-align: center;
		}
	}
`;

const InventoryPhotos = styled.section`
	margin-top: 2em;
	display: flex;
	flex-direction: column;
	width: 100%;
	flex-wrap: wrap;

	img {
		box-shadow: 5px 5px 5px #000000;
	}

	img:hover {
		width: 100.5%;
	}
	@media (max-width: 1030px) {
		width: 100%;
		img {
			box-shadow: 5px 5px 5px #000000;
		}
	}
`;
const ShowInventory = styled.section`
	display: flex;
	flex-direction: column;
	text-align: center;
	@media (max-width: 1030px) {
		margin: 0px;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 100%;
	}
`;
export default OrderSheet;
