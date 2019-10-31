import React from 'react';
import Inventory from '../../../components/Inventory/inventory';
import styled from 'styled-components';

const home = (props) => {
	return (
		<Container>
			<ImageSection>
				<h1>TeaseWear Products</h1>
			</ImageSection>

			<SectionTwo>
				<ColumnOne>
					<h1>
						Making Doggy Apparel <br /> for the decerning client Since 2013
					</h1>
				</ColumnOne>
				<ColumnTwo>
					<h3>Making Custom Doggy Apparel since 2013 </h3>
					<Description>
						<p>
							<b>TeaseWear</b> is named after our beloved dog, Tease. We are a small home-based business
							that started in response to her medical needs. Over the years we have had the pleasure of
							making custom items for numerous pets.
						</p>

						<LargeScreenOnly >
							RESERVED FOR ADDITIONAL TEXT(***** Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							A soluta perferendis, dolor numquam voluptatum adipisci quibusdam quas, aspernatur ex fugiat
							consectetur?*****)
						</LargeScreenOnly>
					</Description>
				</ColumnTwo>
			</SectionTwo>

			<InventorySect>
			<Inventory data='All' />
			</InventorySect>

			<Footer>
				<a href='https://www.facebook.com/Tease-Wear-1581497038759056/?__tn__=%2Cd%2CP-R&eid=ARCcyvRuqbfh9dwusc3_pUUw4Ftju_GRpG7IXFmMC95Fs7KfIiCWMR65Vq8Y_J0j8P7BzmMpg3njn9Jp'>
					<img src='https://img.icons8.com/color/48/000000/facebook-circled.png' alt='facebook icon' />
				</a>
				<a href='#/'>
					<img src='https://img.icons8.com/color/48/000000/twitter.png' alt='twitter icon' />
				</a>
			</Footer>
		</Container>
	);
};

export default home;

const Container = styled.div`
	display:grid;
	grid-template-columns: 1fr;
	grid-template-rows:auto,auto, auto, 80px;
	grid-template-areas:
	'image'
	'sect2'
	'invent'
	'foot';
	width: 100%;
		margin: 0 0;
		h1 {
		margin-top: 1em;
		margin-left: .5em;
		font-size: 1.2em;
		color:yellow;
	}
	/* @media(min-width: 1030px){
	grid-template-columns:1fr,  1fr, 1fr;
    grid-template-rows:1fr, minmax(200px, 100vh), minmax(900px,100vh), 80px;
	grid-template-areas:
	'image'
	'sect2'
	'invent'
	'foot';
		display: flex;
		border: solid 1px pink;
		max-width: 1224px;
		width: 100%;
		margin: 0 auto;
		flex-direction: column;
	} */

`;

const ImageSection = styled.section`
	grid-area:image;
    position:relative;
	height: 200px; 
	width:100%;
	background-image: url('http://www.teasewearproducts.com/images/forapp/teasewearlandingwpaws.jpg');
	background-size:auto;
	background-repeat:no-repeat;
	
	/* @media(min-width: 1024px){
		width: 100%;
		height: 500px;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		h1 {
			margin-top: 2em;
			margin-left: 2em;
			color: yellow;
		};

	} */

	
`;

const SectionTwo = styled.section`
    grid-area:sect2;
	display: flex;
	width: 100vw;
	margin: 0em 0em;
	background: rgba(200, 200, 200, .2);
	h1,
	h3 {
		font-size:1em;
		text-align: center;
		padding-top:1em;
		margin:0;
		color:black;
	}

	p{
		text-align:left;
	}

	
	/* @media (min-width: 1030px) {
		flex-direction: row;
		align-items: center; 
		h1{
		 font-size:2.5em;
		 color:chocolate;
		}:hover {
		  color: black;
		}
	} */
`;


const ColumnOne = styled.section`
	display: none;

/* @media(min-width:1030px){
	display:block;
	width: 45%;
	padding: 1em;
	margin: 0;
} */
`;

const ColumnTwo = styled.section`
	width: 100%;
	margin: 0 0;
	padding: 0 0;

/* @media(min-width:1030px){
	width: 55%;
	padding: 1em;
	margin: 0;
} */

`;

const Description = styled.section`
		width: 100%;
		margin: 0px;
		padding: .5em;
		padding-right:1.5em;
	
	/* @media (min-width: 1030px) {
	display: flex;
	justify-content: space-between;
		p {
			width: 48%;
			text-align: left;
		}
	} */
	
`;

const LargeScreenOnly = styled.p`
	display:none;

	/* @media (min-width: 1030px){
	   display:block;
} */

`
const InventorySect = styled.div`
  width:100%;
  grid-area: 'invent;
 `

const Footer = styled.section`
    grid-area:foot;
	display: flex;
	background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
	height:3em;
	justify-content: space-around;
`;


