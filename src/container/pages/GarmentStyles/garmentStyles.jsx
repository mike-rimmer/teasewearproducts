import React from 'react';
import SmallPhotos from '../../../components/smallphotos';
// import styles from './garmentStyles.module.css';
import styled from 'styled-components'



function GarmentStyles ({ data }) {
	// console.log("In Garment Styles", data)

	let qty = data.length;
	return (
		<Wrapper>
			<GarmentHdr>
				<h3>Garment/s  </h3>
				<h3>({qty}) Styles</h3>
			</GarmentHdr>
			<SmallPhotos data={data} />
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
		margin:0em;
		padding:0em;
	}
`
