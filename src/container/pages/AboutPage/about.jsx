import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from '../../../components/components';

const Wrapper = styled.div`
	position:relative;
	margin:0em;
	padding:0em;
    top:100px;
	display:flex;
	justify-content:space-between;
    width:100%;
    max-width:1024px;
    margin:0 auto;
	align-items: start;
	h3{
		text-align:center;
	}

	p{
		text-align:left;
	}

	@media(max-width:1030px){
		top:0em;
        flex-direction:column;
    }
`

const ColumnLeft = styled.div`
	width:40%;
	img{
		width:90%;
		max-width:500px;
	};

	@media(max-width:1030px){
		top:0px;
		width:100%;
		padding:2em;
    }
	`
const ColumnRight = styled.div`
	width:40%;
	@media(max-width:1030px){
		width:100%;
		padding:2em;
    }
`



const About = (props) => {
	// console.log("In about", props)
	return (
		<Wrapper>
			<ColumnLeft>
				<PhotoCard
					url='http://www.teasewearproducts.com/images/forapp/teasewear.jpg'
					caption='The Girl who started it all!'
				/>
			</ColumnLeft>
			<ColumnRight>
				<h3>Humble Beginnings </h3>
				<p>Tease Wear is named after our beloved dog, Tease.  It is a small home-based business that started in response to her medical needs. Over the years we have had the pleasure of making custom items for various animals. </p>
				{/* <p>The motivation for starting Tease Wear occured in 2013 when I discovered that my Gorden Setter,
					Tease, had become incontinent. Like many other owners faced with this problem I looked for "over
						the counter" solutions and found that doggy diapers were the only option available to me.
					</p>

					<p>
						Although solving the incontinence problem, the diapers themselves were a poor fit: too bulky in
						certain areas; and too loose in other areas. Notwithstanding, aside from surgical intervention,
						and expensive veterinary bills there didnt seem to be any other practical options for my dear
						Tease's problem.
					</p>
					<p>
						After relating Tease's problem to my daughter, Dawn, and the poor choices available, Dawn
						thought for just a moment and then said: "Mom, why don't you just make a tailored panty with absorbing pads/liners"
					</p>
					<p>Hence the beginning of Tease Wear, inspired by my Gordon Setter "Tease".</p>

					<p>
						After designing and successfully trialing my new doggy apparel, I was ready to register my new
						business in the fall of 2014.
					</p>
					<p>
						It wasn't too long before demand for Custom Doggy garments required me to expand the product
						line to include: Winter Coats, Rain Coats, Splash Pants, Belly Bands, Pee-coats and Hoodies.
						...bringing TeaseWear Products to where we are today!
					</p> */}
					
			</ColumnRight>
		
		 </Wrapper>

	);
};

export default About;
