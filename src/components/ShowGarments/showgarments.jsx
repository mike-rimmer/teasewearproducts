import React, { useState } from 'react';
import {GarmentItem, NewLookPhotos}  from '../components'
import styled from 'styled-components'
import { dataList, garments } from '../../container/pages/InfoPage/infoDataList';
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
} from '../../container/pages/GarmentPage/garmentData';


function ShowGarments (props) {
	function calcQty(ele){
		// console.log("In CalcQty:", ele)
		let qty = 0;
		switch(ele){
		case "All":
		    qty = dataList.length - (garments.length+1)
			break;
		case "Cooling Coats":
			qty = cooling.length;
			break;
		case "Diapers":
			qty = diapers.length;
			break;
		case "Belly Bands":
			qty = bellybands.length;
			break;
		case "Splash Pants":
			qty = splashpants.length;
			break;
		case "Snoods":
			qty = snoods.length;
			break;
		case "Bibs":
			qty = bibs.length;
			break;
		case "Winter Coats":
			qty = wintercoats.length;
			break;
		case "Hats":
			qty = hats.length;
			break;
		case "Body Socks":
			qty = bodysocks.length;
			break;
		case "Warming Coats":
			qty = warmingcoats.length;
			break;
		case "Rain Coats":
			qty = raincoats.length;
			break;
		case "Pyjamas":
			qty = pyjamas.length;
			break;
		case "Pee Wraps":
			qty = peewraps.length;
			break;
		default:
			qty = 0;
		}
		
		return qty;
	}

	const [data, setData] = useState(props.data)
	
   function clickHandler(caption, e){
       setData(caption)
   }

   
	const list = garments.map((ele)=>{
	return	<GarmentItem  key = {ele} name ={ele} caption ={ele} qty = { calcQty(ele)} 
	onClick={clickHandler}/>
})

const Garments =styled.section`
    width:100%;
    display:flex;
	justify-content:space-between;
	@media(max-width:1030px){
      flex-direction:column;
	}

`

const GarmentMenu =styled.section`
    margin:0px;
    margin-top:40px;
    /* grid-area: 'sb'; */
    min-width:270px;
    height:580px;
    background:rgba(200,200, 200, .2);
    width:35%;
	h4{
		text-align:center;
	}
	@media(max-width:1030px){
		display:flex;
		width:100%;
		height:auto;
		flex-direction:row;
		flex-wrap:wrap;
		h4{
		padding-left:1em;
		text-align:center;
	}
	}
`

const GarmentPhotos =styled.section`
     /* width:800px; */
	 margin-top:2em;
    display:flex;
    width:70%;
	img{
		box-shadow: 5px 5px 5px #000000;
	}

	img:hover{
		width:100.5%;
	}
	@media(max-width:1030px){
	    width:100%;
		img{
		box-shadow: 5px 5px 5px #000000;
	}
	}
`
const ShowList = styled.section`
	display:flex;
	flex-direction:column;
	text-align:center;
	@media(max-width:1030px){
		margin:0px;
		flex-direction:row;
		justify-content:space-around;
		flex-wrap:wrap;
		width:100%;
	}
`


return(
	<Garments>
       <GarmentMenu>
	   <h4>Garment Selection</h4>
	   <ShowList>
		{list}
	   </ShowList>
	   </GarmentMenu>
		<GarmentPhotos>
			<NewLookPhotos data = {data} 
			garmentStyle={data === 'All' ? 'Show' : ''} />
		</GarmentPhotos>
	</Garments>
	);
}
export default ShowGarments;
