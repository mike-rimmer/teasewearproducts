import React from 'react';
import GarmentPhotos from '../../../components/garmentphotos';
// import styles from './garmentStyles.module.css';
import styled from 'styled-components'



function GarmentStyles ({ data }) {
	// console.log("In Garment Styles", data)

	let qty = data.length;
	return (
		<Wrapper>
			<GarmentHdr>
				<h3>Garment Styles ({qty})</h3>
			</GarmentHdr>
			<GarmentPhotos data={data} />
		</Wrapper>
	);
}

export default GarmentStyles;

const Wrapper = styled.div`
position:relative;
width:100%;
height:100px;
h3, h4{
   margin:0em;
}
`
const GarmentHdr = styled.div`
    display:flex;
    flex-direction: row;
	justify-content: center;
	
	padding-top:1em;
	h3,h4{
		font-size:1.2em;
		margin:0em;
		padding:0em;
	}
`
