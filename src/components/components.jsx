import React, { useState, useEffect } from 'react';
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
} from '../container/pages/GarmentPage/garmentData';

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

export const GarmentItem = (props) => {
	console.log('In GarmentItem', props.name);
	const [ caption ] = useState(props.caption);

	const CaptionStyle = styled.span`
		margin-top: 8px;
		margin-bottom: 8px;
		margin-left: 5px;
		text-align: left;
		font-weight: bold;
		width: 70%;
	`;

	const QtyStyle = styled.span`
		margin-top: 8px;
		margin-bottom: 8px;
		margin-right: 5px;
		width: 30%;
		/* width:100px; */
		text-align: left;
	`;

	const Item = styled.section`
		display: flex;
		max-width: 20em;
		width: 100%;
		padding: 0 1em;
		border-radius: 1em;
		&:hover {
			color: white;
			background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
		}
		@media (max-width: 1030px) {
			flex-directon: column;
		}
	`;
	return (
		<Item onClick={(e) => props.onClick(caption, e)}>
			<CaptionStyle>{caption}</CaptionStyle>
			<QtyStyle>(Qty) {props.qty}</QtyStyle>
		</Item>
	);
};

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

export const SmallPhotos = (props) => {
	const PhotoList = styled.div`
	display:flex;
	width:100%;
	justify-content: space-around;
	flex-wrap:wrap;
`
   const SmallPhoto = styled.div`
      position:relative;
    display:flex;
    flex-direction: column;
    margin:auto;
    padding: 10;
    margin-top:20px;
    height:280px;
    width:250px;
    border-radius:10px;
    text-align: center;
	@media(max-width:1030px){
		border:solid 1px red;
	}
 `

 const SmallImage = styled.img`
    border:solid 1px black;
    height:200px;
    width:200px;
    border-radius:10px;
    box-shadow: 7px 16px 16px rgba(12,12,12,.5);
    margin:20px;
	@media(max-width:1030px){
		margin:0em;
	}
 `
	// console.log('In SmallPhotos Value of Props', props);
	// let temp = props.data.map((ele) => `show/${ele.dir}`);
	// console.log('Value of Temp', temp);

	let noId = props.garmentStyle === 'Show' || props.garmentStyle === 'Regular' ? true : false;
	let list;
	// TODO:Check the logic for noId
	if (noId) {
		list = props.data.map((ele) => (
			<SmallPhoto key={ele.id}>
			{/* <div key={ele.id} className={styles.smallPhoto}> */}
				{/* <img key={ele.id} className={styles.smallImage} src={ele.url} alt={ele.caption} /> */}
				<SmallImage key={ele.id} scr = {ele.url} alt = {ele.caption}/>
				<Link style={{ textDecoration: 'none' }} to={`${ele.dir}`}>
					{' '}
					{ele.caption}
				</Link>
			</SmallPhoto>
		));
	} else {
		list = props.data.map((ele) => (
			<SmallPhoto key={ele.id}>
				<SmallImage key={ele.id} src={ele.url} alt={ele.caption} />
				<Link style={{ textDecoration: 'none' }} to={`${ele.dir}/${ele.id}`}>
					{' '}
					{ele.caption}
				</Link>
			</SmallPhoto>
		));
	}

	return (
		<PhotoList>
			{list}
		</PhotoList>
	);
};

export const NewLookPhotos = (props) => {
	console.log('In NewLookPhotos Value of Props', props);
	const data = getGarmentData(props.data);
	console.log('Garment Data is ', data);
	let noId = props.garmentStyle === 'Show' || props.garmentStyle === 'Regular' ? true : false;
	let list;
	console.log('NoID', noId);
	if (noId) {
		list = data.map((ele) => (
			<div key={ele.id} className={styles.newlookPhotos}>
				<img key={ele.id} className={styles.newImage} src={ele.url} alt={ele.caption} />
				<Link style={{ textDecoration: 'none' }} to={`${ele.dir}`}>
					{' '}
					{ele.caption} Price ${ele.price}{' '}
				</Link>
			</div>
		));
	} else {
		list = data.map((ele) => (
			<div key={ele.id} className={styles.newlookPhotos}>
				<img key={ele.id} className={styles.newImage} src={ele.url} alt={ele.caption} />
				<Link style={{ textDecoration: 'none' }} to={`${ele.dir}/${ele.id}`}>
					{' '}
					{ele.caption}
				</Link>
			</div>
		));
	}

	return (
		<div className={styles.photoList}>
			{list}
			{/* <h1>Testing </h1> */}
		</div>
	);
};
export const SizeButton = () => {
	const Wrapper = styled.div`
	margin:0em;
	`
	// TODO: Make this into a basic with no return
	return (
		<Wrapper>
			<input type='radio' name='size' value='s' />
			<label>S</label>
			<input type='radio' name='size' value='m' />
			<label>M</label>
			<input type='radio' name='size' value='l' />
			<label>L</label>
			<input type='radio' name='size' value='Xl' />
			<label>Xl</label>
			<input type='radio' name='size' value='2X' />
			<label>2X</label>
			<input type='radio' name='size' value='3X' />
			<label>3X</label>
		</Wrapper>
	);
};



export const ShowWindowSize = (props) => {
	const [ width, setWidth ] = useState();
	const [ height, setHeight ] = useState();

	const updateWindowsDimensions = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', updateWindowsDimensions);
		return () => {
			window.removeEventListener('resize', updateWindowsDimensions);
		};
	});

	const style = {
		marginLeft: '40px',
		color: 'pink',
		zindex: 0
	};

	return (
		<div>
			<p style={style}>Height: {height} </p>
			<p style={style}>Width: {width} </p>
		</div>
	);
};
