// TODO Responsive format

import React from 'react';
// import styles from './info.module.css';
import styled from 'styled-components'
import { dataList } from './infoDataList';
import InfoSheet from '../../../components/InfoSheet/infosheet';
import GarmentStyles from '../../../container/pages/GarmentStyles/garmentStyles';

const Wrapper = styled.section`
    color:black;
    display:flex;
	@media(max-width:1030px){
		font-size:12px;
		width:100%;
		flex-direction:column;
		height:auto;
		padding:0px;
	};
`

const InfoSection = styled.section`
    margin:0px;
    padding:20px;
    width:20%;
    height:auto;
    /* margin:0 auto; */
    background:rgb(176, 197, 204);
    border-radius:10px;
    text-align:left;
	h1, h2, h3, h4, p {
		padding: 0em;
		margin: .5em;
		text-align:left;
	}
	@media(max-width:1030px){
		width:100%;
		height:auto;
		border-radius:0;
	};
`

const GarmentSection = styled.section`
    display:flex;
	padding-top:0px;
    padding-bottom: 60px;
    border-radius:10px;
    height:650px;
	overflow:scroll;
    background:lightyellow;
    margin-bottom:10px;
	@media(max-width:1030px){
		
		flex-direction:row;
		width:100%;
		height:300px;
		flex-wrap:wrap;
	};
`

const MeasureSection = styled.section`
   	width:40%;
    padding:8px;
	text-align:center;
	height:auto;
	h3{
		margin:0px;
	}

	img{
    width:500px;
	object-fit:	contain;
	}

	@media(max-width:1030px){
		width:100%;
		img{
		width:375px;
			object-fit:	contain;
		}
}
`


function InfoPage (props) {
	
	// console.log('InfoPage Match', props.match);
	// console.log('InfoPage Props', props);

	// const [ data, setData ] = useState([]);

	// const tempProps = 'Cooling Coats';

// const ItemsForSale = dataList.reduce((acc, item)=> {
// 	if(item.id >=15){
// 	const filteredItem = acc.filter(item2 => item2.caption === item.caption)[0]
// 	filteredItem !== undefined ? filteredItem.quantity++ : acc.push({...item, quantity: 1,})
// }
// 	return acc
// },[])

// console.table("Items for Sale", ItemsForSale)
// console.log(dataList.length)
	let InfoData;
	let tempData;
	let garmentStyles
	let persistGarment;
	// if we receive an id we find the garment style and pass the info to InfoSheet
	if (props.match.params.id) {
		tempData = dataList.find((ele) => ele.id.toString() === props.match.params.id)
		// console.log("Tempdata", tempData.caption)
		persistGarment = tempData.caption
		garmentStyles = dataList.filter((ele)=>ele.caption === persistGarment && ele.id>13)
		// console.log("InfoData props match id TempData", tempData);
		InfoData = <InfoSheet id={props.match.params.id} data = {dataList}/>
		garmentStyles = <GarmentStyles data={garmentStyles} />
	} else {
		tempData = dataList.filter((ele) => ele.caption === props.garmentType && ele.id>13);
		// console.log("InfoData props do not match id TempData", tempData);
		InfoData =<InfoSheet />
		garmentStyles =	<GarmentStyles data={tempData} />
	
	}
	// console.log('Info Page Data', tempData);
	return (
		<Wrapper>
			<InfoSection>{InfoData}</InfoSection>
			<GarmentSection>
				{garmentStyles}
			</GarmentSection>
			<MeasureSection>
				<h3>This will be the measuring area</h3>
				<img src='http://www.teasewearproducts.com/images/forapp/measurediag.jpg' alt='measure diag'/>
			</MeasureSection>
			{/* <button><h4>Add to Cart</h4></button> */}
		</Wrapper>
	);
}

export default InfoPage;
