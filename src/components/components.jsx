import React, { useState} from 'react';
import styles from '../components/component.module.css';
import styled from 'styled-components';
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



export const ContactCard = (props) => {
	const ContactCard = styled.div`
		margin-top: 2.5em;
		margin-right: 2em;
		padding: 1em 1em;
		width: 100%;
		background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		box-shadow: 7px 16px 16px rgba(12, 12, 12, .5);
		/* padding-left:30px; */
		border-radius: 1em;
		text-align: left;
	`;
	const Message = styled.h3`
		margin-top: 60px;
		font-weight: bold;
	`;
	const Address = styled.p`
		font-weight: bold;
		text-align: left;
	`;
	return (
		<ContactCard>
			<h2>Tease Wear Products</h2>
			<Address>30 Tanner Drive</Address>
			<Address>Stirling, ON K0K-3E0</Address>
			<h5>P:(613)477-1113</h5>
			<h5>C:(613)919-0611</h5>
			<h5>Normal Business Hours:</h5>
			<h5>Monday - Friday from 9:00 am - 4:00pm</h5>
			<Message>
				<p>Please contact us during regular business hours to help you with your order</p>
			</Message>
		</ContactCard>
	);
};

export const PhotoCard = (props) => {
	const Card = styled.div`
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: auto;
	`;
	const Image = styled.img`
		height: auto;
		width: 300px;
		border-radius: 10px;
		box-shadow: 7px 16px 16px rgba(12, 12, 12, .5);
		margin-bottom: 20px;
	`;
	// //console.log(`Just before render in PhotoCard ${props.withBalloon}`)
	// const [showBalloon ] = useState(props.withBalloon);
	return (
		<Card>
			{props.withBalloon ? <Balloon onClick={props.onClick} balloonId={props.balloonId} /> : ''}
			<h5 className={styles.caption}>{props.caption}</h5>
			<Image src={props.url} alt={props.caption} />
			<p>{props.desc}</p>
		</Card>
	);
};

export const Balloon = (props) => {
	return (
		<span id={props.balloonId} className={styles.balloonStyle} onClick={(id) => props.onClick(id)}>
			Referrals
		</span>
	);
};

export const ReferralCard = (props) => {
	return (
		<div className={styles.referralCard}>
			<img src={props.imgUrl} alt={props.person} />
			<div className={styles.data}>
				<p>{props.person}</p>
				<p>{props.date}</p>
			</div>
			<div className={styles.dataBody}>
				<p>{props.comment}</p>
			</div>
		</div>
	);
};








