import React from 'react';
import logo from '../../../src/logowhite.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DrawerToggleButton from './drawerToggleButton';

const navMenu = (props) => {
	return (
		<header>
			<Wrapper>
				<div className ='ToggleButton'>
					<DrawerToggleButton click={props.clickHandler} />
				</div>
				<Link to='/'>
				<img src={logo} alt='TeaseWear Logo' />
				</Link>{`TeaseWear`}
				<div className = 'MenuItems'>
					<ul className=''>
						<TeaseLink to='/' className=''>
							Home
						</TeaseLink>
						<TeaseLink to='/about' className=''>
							About
						</TeaseLink>
						<TeaseLink to='/contact' className=''>
							Contact
						</TeaseLink>
						{/* Used for testing Responsive Design */}
						{/* <DisplayWindowSize/> */}
					</ul>
				</div>
			</Wrapper>
		</header>
	);
};

export default navMenu;

const Wrapper = styled.nav`
      /* position:fixed;
	  left: calc(50% - 50%);
	  right:calc(50% - 50%);
	  top:0px;
	  height:90px; */
	  width:100%;
	  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
	  display:flex;
	  align-items:center;
	  z-index:100;
	  font-family: 'Rock Salt', cursive;
	  img{
		  margin-left:2em;
		  margin-right:2em;
		  width:4em;
		  height:4em;  
	  };
	  color:white;

	  @media(min-width:1030px){
		left: calc(50% - 46%);
		right:calc(50% - 46%);
	  }
	.ToggleButton{
		margin-left:20px;
		visibility:hidden;
		@media(max-width:590px){
		  visibility:visible;
		  }	
	}
	
	.MenuItems{
	  margin-left:auto;
	  padding-right:2em;
	  display:visible;
	  ul{
		display:flex; 
		  align-items:center;
          width:300px;		 
	  }
	
	  li{
		list-style:none;
	  }
	
	  /* a{
		color:white;
	  margin-left:40px;
	  text-decoration:none;  
	  } */

	  @media(max-width:590px){
		  display:none;
		  }
	
	  
	}
	`
	
 const TeaseLink =  styled(Link)`
 color:white;
 margin:left;
 text-decoration:none;
 flex:auto;
 `

 
 