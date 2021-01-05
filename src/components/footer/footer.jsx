import React from 'react';
import styled from 'styled-components';

 function FooterSect(){
    return(
<Footer>
				<a href='https://www.facebook.com/Tease-Wear-1581497038759056/?__tn__=%2Cd%2CP-R&eid=ARCcyvRuqbfh9dwusc3_pUUw4Ftju_GRpG7IXFmMC95Fs7KfIiCWMR65Vq8Y_J0j8P7BzmMpg3njn9Jp'>
				<img src='https://img.icons8.com/color/48/000000/facebook-circled.png' alt='facebook icon' />
				</a> <a href='#/'><img src='https://img.icons8.com/color/48/000000/twitter.png' alt='twitter icon' />
				</a>
</Footer>

    )
}



const Footer = styled.section`
	position: fixed;
	display:flex;
	bottom:0px;
	background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
	height:3em;
	justify-content: space-around;
	width:100%;

`;

export default FooterSect;