import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from '../../../components/components';
import Footer from '../../../components/footer'



const About = (props) => {
	return (
		<Wrapper>
			<div className = 'ColumnLeft'>
				<PhotoCard
					url='http://www.teasewearproducts.com/images/forapp/teasewear.jpg'
					caption='The Girl who started it all!'
				/>
			</div>
			<div className = 'ColumnRight'>
				<h3>Humble Beginnings </h3>
				<p>Tease Wear is named after our beloved dog, Tease.</p>
				<p>We are a small home-based business that started in response to her medical needs. Over the years we have had the pleasure of making custom items for various animals. </p>
				<p>We design handmade doggy apparel made from the finest material</p>	
			</div>
		 <Footer/>
		 </Wrapper>
	

	);
};

export default About;

const Wrapper = styled.div`
    margin-top:8em;
	margin-bottom:8em;
	display:grid;
	grid-template-columns:auto;
	grid-gap:4em;
	grid-template-areas:
	'left'
	'right'
	'foot';
	
	h3{
		text-align:center;
	}

	p{
		text-align:left;
	}

	@media(min-width:1030px){
	margin-top:8em;
	margin-bottom:8em;
	grid-template-columns: 5% 1fr 1fr 5%;
	grid-template-rows:1fr;
	grid-template-areas:
	'. left  right .'
	'foot foot foot foot ';
	}
    

.ColumnLeft{
	grid-area :left;
	top:0px;
		/* width:100%; */
		/* padding:2em; */
	img{
		width:90%;
		max-width:500px;
	};

}	
	
.ColumnRight{
    grid-area :right;
	padding-left:1em;

	p{
		margin-top:1em;
		text-align:left;
	}

	h3{
		text-align:center;
	}
}
`

