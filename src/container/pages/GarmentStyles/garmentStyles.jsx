import React from 'react';
import { SmallPhotos } from '../../../components/components';
import styles from './garmentStyles.module.css';
import styled from 'styled-components'

const Wrapper = styled.div`
width=100%;
h3, h4{
   margin:0em;
}
`
const GarmentHdr = styled.div`
   display:flex;
    flex-direction: row;
    justify-content: center;
	h3,h4{
		margin:0em;
		padding:0em;
	}
`

function GarmentStyles ({ data }) {
	// console.log("In Garment Styles", data)

	let qty = data.length;
	return (
		<Wrapper>
			<GarmentHdr>
				<h3>Garment/s  </h3>
				<h4>({qty}) Styles</h4>
			</GarmentHdr>
			<SmallPhotos data={data} />
		</Wrapper>
	);
}

export default GarmentStyles;
