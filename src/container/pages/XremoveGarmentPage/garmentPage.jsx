import React, { useState } from 'react';
import Modal from '../../../components/Modal/modal';
import {
	products,
	cooling,
	diapers,
	bellybands,
	splashpants,
	snoods,
	bodysocks,
	// pjs,
	// peewraps,
	bibs,
	raincoats,
	warmingcoats,
	wintercoats,
	hats
} from  './garmentData';

import { PhotoCard } from '../../../components/components';
import ContructPage from '../ConstructPage/construct';
import styles from './garmentPage2.module.css';
import styled from 'styled-components'

import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// A Garment Page will display any number of garment cards by receiving an data file from the calling component
//  props sent to this component will be
// props.garmentType
// props.showModal
// props.garmentTitle

const Wrapper = styled.div`
   position:relative;
   top:100px;
   background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);	
   width:auto;
   text-align:center;
   h1{
    padding-top:20px;
    padding-bottom:20px;
    color:  #174568 ; 
}
.wrapper h1:hover{
    color:  #174568 ; 
}
`


const GarmentPage = ( props) => {
	console.log("Garment Page Match", props.match)
	console.log('Garment Page Props ',props)
	const [ showModal, setShowModal ] = useState(false);
	const [ testimonial, setTestimonial ] = useState(props.testimonial);

	// Since GarmentPage is used to render both the Garment types and the Garment Styles different Route Links are required when rendering the photos during the mapping function below. Regular and Show are garment types and so no 
	// id is required 
	let addId 
	if (props.garmentType === 'regular' || props.garmentType === 'show' ){
		addId = false
	}else{
		addId = true
	}

	// console.log("Garment Type", props.garmentType);
	// console.log("AddId", addId);
	// Need to diferrentiate Regular and Show from also samples so
	// I will set this state to true if the Show or Regular page is requested.

	// const [ showBalloon] = useState(props.showBalloon)
	// //console.log("Garments Page Show Balloon", showBalloon)
	// //console.log("Garments Page Show Balloon Props", props.showBalloon)

	const clickHandlerTestimonial = (e) => {
		// TODO Leaving the code in just incase we want to implement
		// custom Referrals
		//  *******************************************************
		setTestimonial(e.target.id);
		// alert(e.target.id)
		setShowModal(true);
	};

	const modalClickHandler = () => {
		// alert("Modal Clicked")
		setShowModal(false);
	};

	let showMore = false;
	let garment = [];
	// This switch selected the appropriate garment to render
	switch (props.garmentType) {
		case 'regular':
			showMore = true;
			garment = products;
			break;
		case 'show':
			showMore = true;
			garment = products;
			break;
		case 'bellybands':
			garment = bellybands;
			break;
		case 'bibs':
			garment = bibs;
			break;
		case 'bodysocks':
			garment = bodysocks;
			break;
		case 'cooling':
			garment = cooling;
			break;
		case 'diapers':
			garment = diapers;
			break;
		case 'hats':
			garment = hats;
			break;
		case 'peewraps':
			garment = '';
			break;
		case 'pjs':
			garment = '';
			break;
		case 'raincoats':
			garment = raincoats;
			break;
		case 'snoods':
			garment = snoods;
			break;
		case 'splashpants':
			garment = splashpants;
			break;
		case 'warmingcoats':
			garment = warmingcoats;
			break;
		case 'wintercoats':
			garment = wintercoats;
			break;
		default:
	}

	let regGarmentList;
	if (garment.length > 0) 
	{
		// const dir = props.match ? props.match.url : ''
		// console.log('Garments', garment);
		if(!addId)
		{
			regGarmentList = garment.map((reg) => {
				return (
					<PhotoCard
					className={styles.card}
					key={reg.id}
					url={reg.url}
					desc={reg.desc}
					caption={
						<Link to={reg.dir}>
							{reg.caption} {showMore ? '(Click) for Styles' : ''}
						</Link>
					}
					withBalloon={props.showBalloon}
					onClick={clickHandlerTestimonial}
					// I am using the photo dir for convenience as it refers to the relevent product type
					balloonId={reg.dir}
				/>
			);
		});
	}else{
		regGarmentList = garment.map((reg) => {
			return (
				<PhotoCard
				className={styles.card}
				key={reg.id}
				url={reg.url}
				desc={reg.desc}
				caption={
					<Link to={`${reg.dir}/${reg.id}`}>
					{/* {`${reg.dir}/:${reg.caption}`} */}
						{reg.caption} 
					</Link>
				}
				withBalloon={props.showBalloon}
				onClick={clickHandlerTestimonial}
				// I am using the photo dir for convenience as it refers to the relevent product type
				balloonId={reg.dir}
			/>
		);
	});
	}
		
		return (
			<Wrapper>
				{/* <h1> Assorted Regular Garments </h1> */}
				<h1>{props.garmentTitle}</h1>
				{showModal ? <Modal onClick={modalClickHandler} product={testimonial} /> : ''}
				<div className={styles.cardContainer}>{regGarmentList}
				</div>
			</Wrapper>
		);
	} else {
		return <ContructPage />;
	}
};

export default GarmentPage;
