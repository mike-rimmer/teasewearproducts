import React from 'react';
import { Link } from 'react-router-dom';
import {
	products,
	bellybands,
	bibs,
	bodysocks,
	cooling,
	raincoats,
	warmingcoats,
	wintercoats,
	diapers,
	hats,
	pyjamas,
	peewraps,
	snoods,
	splashpants
} from '../container/pages/XremoveGarmentPage/garmentData';

import styled from 'styled-components'

const NewLookPhotos = (props) => {
	// console.log('In NewLookPhotos Value of Props', props);
	const data = getGarmentData(props.data);
	// console.log('Garment Data is ', data);
	// TODO:This logic needs to be cleaned up.  Originally I passed "Show" or "Regular" to differentiate between the 
	// types of garments but that difference is no longer relevent. Instead I just pass the data I want this NewLookPhoto to show. In the first pass it is all the different category of garments, in subsequent passes it is the targeted category 
	let noId = props.garmentStyle === 'Show' || props.garmentStyle === 'Regular' ? true : false;
	let images;
	// console.log('NoID', noId);
	
	// TODO: remove styles.newlookPhotos 
	if (noId) {
		images = data.map((ele) => (
			<ImageWithCaption key={ele.id} >
				<img src={ele.url} alt={ele.caption} onClick = {props.onclick}/>
				<CaptionLink style={{ textDecoration: 'none' }} to={`${ele.dir}`}>
					{' '}
					{ele.caption} Price ${ele.price}{' '}
				</CaptionLink>
			</ImageWithCaption>
		));
	} else {
		images = data.map((ele) => (
			<React.Fragment>
				< img key={ele.id}  src={ele.url} alt={ele.caption} />
				<CaptionLink  to={`${ele.dir}/${ele.id}`}>
					{' '}
					{ele.caption} Item#: {ele.id}
				</CaptionLink>
			</React.Fragment>
		
		));
	}

	return (
		// <div className={styles.photoList}>
		// <ImageContainer>
		<React.Fragment>
			{images}
		</React.Fragment>
		
		// </ImageContainer>
	);
};

function getGarmentData (garmentType) {
	let garmentdata;
	console.log('In getGarmentData', garmentType);
	switch (garmentType) {
		case 'All':
			garmentdata = products;

			break;
		case 'Belly Bands':
			garmentdata = bellybands;

			break;
		case 'Bibs':
			garmentdata = bibs;

			break;
		case 'Body Socks':
			garmentdata = bodysocks;

			break;
		case 'Cooling Coats':
			garmentdata = cooling;

			break;
		case 'Rain Coats':
			garmentdata = raincoats;

			break;
		case 'Warming Coats':
			garmentdata = warmingcoats;

			break;
		case 'Winter Coats':
			garmentdata = wintercoats;

			break;
		case 'Diapers':
			garmentdata = diapers;

			break;
		case 'Hats':
			garmentdata = hats;

			break;
		case 'Pyjamas':
			garmentdata = pyjamas;

			break;
		case 'Pee Wraps':
			garmentdata = peewraps;

			break;
		case 'Splash Pants':
			garmentdata = splashpants;

			break;
		case 'Snoods':
			garmentdata = snoods;

			break;
		default:
			garmentdata = '';
	}
	return garmentdata;
}
 
const ImageContainer = styled.div`
/* display:flex; 
overflow-x:auto;
width:90vw;
margin:0 auto; */

`

const ImageWithCaption = styled.div`

`
const CaptionLink =  styled(Link)`
  color:darkblue;
`

export default NewLookPhotos