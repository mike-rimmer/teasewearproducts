import React from 'react';
import OrderSheet from '../../../components/OrderSheet/ordersheet';
import styled from 'styled-components'


const home = (props) => {
	return (
		<Container>
			<SectionOne>	
				<h1>TeaseWear Products</h1>
			</SectionOne>

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

						<p>
							RESERVED FOR ADDITIONAL TEXT(***** Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							A soluta perferendis, dolor numquam voluptatum adipisci quibusdam quas, aspernatur ex fugiat
							consectetur?*****)
						</p>
					</Description>
				</ColumnTwo>
			</SectionTwo>

			<OrderSheet data='All' />

			<Footer>
				<a
					href='https://www.facebook.com/Tease-Wear-1581497038759056/?__tn__=%2Cd%2CP-R&eid=ARCcyvRuqbfh9dwusc3_pUUw4Ftju_GRpG7IXFmMC95Fs7KfIiCWMR65Vq8Y_J0j8P7BzmMpg3njn9Jp'>
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
	display:flex;
	border:solid 1px pink;
	max-width:1224px;
    width:100%;
    margin:0 auto;
    flex-direction:column;
	@media(max-width:1030px){
		width:100%;
		margin:0 0;
		padding:0 0;
	}
`

const SectionOne = styled.section`
    /* position:relative; */
    width:100%;
    height:500px;
    background-image: url( 'http://www.teasewearproducts.com/images/forapp/teasewearlandingwpaws.jpg');
    background-position: center;
    background-size:cover;
	background-repeat: no-repeat;
	h1{
		margin-top:2em;
		margin-left:2em;
		color:yellow;
	}
	@media(max-width:1024px){
	height:200px;
	width:100%;
	background-image: url( 'http://www.teasewearproducts.com/images/forapp/teasewearlandingwpaws.jpg');
	background-size:fit;
	h1{
		margin-top:1em;
		font-size:1em;

	}
	}
	`

const SectionTwo = styled.section`
     display:flex;
     width:100%;
	 padding:1em 1em;
     justify-content: space-between;
     margin: 1em 0em;
     background:rgba(200,200, 200, .2);
	 h1, h3{
		 text-align:center;
	 }

	 h1:hover{
		 color:black;
	 }

	 @media(max-width:1030px){
	 flex-direction:column;
	}
`
const ColumnOne = styled.section`
	   width:45%;
	   padding:1em;
       margin:0;
	   @media(max-width:1030px){
		display:none;
		}
	 `	 

	 const ColumnTwo = styled.section`
	   width:55%;
	   padding:1em;
       margin:0;
	   @media(max-width:1030px){
		width:100%;
		margin:0 0;
		padding:0 0;
		}
	 `

	 const Description = styled.section`
		display:flex;
     	justify-content:space-between;
		p{
		width:48%;
		text-align:left;
		}
		@media(max-width:1030px){
			width:100%;
			flex-direction:column;
			margin:0px;
			padding:0px;
			p{
				padding:1em 1em;
				width:90%;
				margin:0 auto;
			}
	}
	 `

	 const Footer = styled.section`
	    display:flex;
    	background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
   		height:3em;
		justify-content:space-around;
	 
	 `
