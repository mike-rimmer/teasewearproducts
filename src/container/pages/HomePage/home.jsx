import React from 'react';
import Inventory from '../../../components/Inventory/inventory';
import PhotoCard from '../../../components/PhotoCard'
import styled from 'styled-components';
import Footer from '../../../components/footer/footer'
// look at barkertime.com


const home = (props) => {
	return (
		<Container>
			<div className  = 'ImageSection'>
				<h1>TeaseWear Products</h1>
			</div>
			<div className = 'SectionTwo'>
				<PhotoCard url='http://www.teasewearproducts.com/images/forapp/teasewear.jpg' caption='The Girl who started it all!' desc = 'test' />
				<PhotoCard/>
               
				<div className = 'ColumnOne'>
						<h1>
							Making Doggy Apparel <br /> for the decerning client Since 2013
						</h1>
				</div>
				<div className = 'ColumnTwo'>
					<h3>Making Custom Doggy Apparel since 2013 </h3>
					<div className = 'Description'>
						<p>
							<b>TeaseWear</b> is named after our beloved dog, Tease. We are a small home-based business
							that started in response to her medical needs. Over the years we have had the pleasure of
							making custom items for numerous pets.
						</p>

						{/* <div className = 'LargeScreenOnly' >
							RESERVED FOR ADDITIONAL TEXT(***** Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							A soluta perferendis, dolor numquam voluptatum adipisci quibusdam quas, aspernatur ex fugiat
							consectetur?*****)
						</div> */}
					</div>
				</div>
			</div>
			<div className  = 'InventorySect'>
				<Inventory data ='All'/>
			</div>

		   <div className = 'footer'>
		   <Footer/>
		 	</div>
		</Container>
	)		
};

export default home;


const Container = styled.div`
	display:grid;
	grid-template-columns: 5% 1fr 5%;
	grid-template-areas:
	'. image .'
	' . sect2 .'
	' . invent .'
	' . foot .';
	width: 100%;
	margin: 0 0;
	padding:0 0;
		h1 {
		margin-top: 1em;
		margin-left: .5em;
		font-size: 1.2em;
		color:yellow;
	}

	.ImageSection{
   	grid-area:image;
  	height: 200px;
	width:auto;
	background-image: url('http://www.teasewearproducts.com/images/forapp/teasewearlandingwpaws.jpg');
	background-size:cover;
	background-position:center;
	background-repeat:no-repeat;
	
	@media(min-width:1030px){
	height: 200px;
	margin: 0 auto;
	width:100%;
		h1 {
			margin-top: 2em;
			margin-left: 2em;
			color: yellow;
		};
	};
	};

	.SectionTwo{
	grid-area:sect2;
	margin-top:2em;
	display: flex;
	width: auto;
	height:auto;
	background: rgba(200, 200, 200, .2);
	background:linear-gradient(0deg,#09203f 0,#537895);
	padding:2em;
		h3 {
			font-size:1.2em;
			text-align: center;
			padding-top:1em;
			margin-bottom:2em;
			color:white;
		}

		p{
			text-align:left;
			line-height:2em;
			color:white;
		}

		.ColumnOne{
		padding: 0 4em;
		display: none;
		}

		.ColumnTwo{
		width: 100%;
		margin: 0 0;
		padding: 0 4em;
		}
	};

	.InventorySect{
 		grid-area: invent;
	}

	@media(min-width:1020px){
	grid-template-columns: 10% 1fr 1fr 10%;
	grid-template-areas:
	' . image image .'
	' . sect2 sect2.'
	' . invent invent .'
	' . foot foot . ';

	}
	`


	