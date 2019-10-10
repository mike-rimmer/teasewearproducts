import React, { useState } from 'react';
import Modal from '../../../components/modal';
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
} from './garmentData';

import { PhotoCard } from '../../../components/components';
import ContructPage from '../ConstructPage/construct';
import styles from './garmentPage.module.css';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// A Garment Page will display any number of garment cards by receiving an data file from the calling component
//  props sent to this component will be
// props.garmentType
// props.showModal
// props.garmentTitle

const GarmentPage = (props) => {
	// //console.log('Props received',props)
	const [ showModal, setShowModal ] = useState(false);
	const [ testimonial, setTestimonial ] = useState(props.testimonial);
	const [addId, setAddId ] = useState(false)
 


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
	switch (props.garmentType) {
		case 'regular':
			showMore = true;
			garment = products[0];
			break;
		case 'show':
			showMore = true;
			garment = products[1];
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

	// useEffect(
	// 	() => {
	// 		CalcCurrentWindow();
	// 	},[ showModal, windowHeight, windowWidth ]);

	// function CalcCurrentWindow () {
	// 	setWindowHeight(window.innerHeight);
	// 	setWindowWidth(window.innerWidth);
	// }

	if (garment.length > 0) {
		// console.log('Garments', garment);
		const regGarmentList = garment.map((reg) => {
			return (
				<PhotoCard
					className={styles.card}
					key={reg.id}
					url={reg.url}
					desc={reg.desc}
					//Link is a component that helps to navigate the application.
					// It essentially renders a fully accessible anchor tag which provides an absolute path
					// to the desired destination or component in this case I create a dynamic path based
					by
					appending
					the
					applicable
					dir
					to //products. When the anchor tag is clicked the <Route/> component (see TeaseApp.js) is used to call the appropriate component.
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
        // console.log("In Garments Page")
		return (
			<div className={styles.wrapper}>
				{/* <h1> Assorted Regular Garments </h1> */}
				<h1>{props.garmentTitle}</h1>
				{showModal ? <Modal onClick={modalClickHandler} product={testimonial} /> : ''}
				<div className={styles.cardContainer}>{regGarmentList}</div>
			</div>
			
		);
	} else {
		return <ContructPage />;
	}
};

export default GarmentPage;
