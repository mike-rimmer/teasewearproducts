import React from 'react';
import logo from '../../../src/logowhite.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DrawerToggleButton from './drawerToggleButton';

const navMenu = (props) => {
	return (
		<header>
			<Wrapper>
				<ToggleButton>
					<DrawerToggleButton click={props.clickHandler} />
				</ToggleButton>
				<img src={logo} alt='TeaseWear Logo' />
				<Link to='/'>{/* <h1>TeaseWear</h1> */}</Link>{' '}
				<MenuItems>
					<ul className=''>
						<Link to='/' className=''>
							<li>Home</li>
						</Link>
						<Link to='/about' className=''>
							<li>About</li>
						</Link>
						<Link to='/contact' className=''>
							<li>Contact</li>
						</Link>
						{/* Used for testing Responsive Design */}
						{/* <DisplayWindowSize/> */}
					</ul>
				</MenuItems>
			</Wrapper>
		</header>
	);
};

export default navMenu;

const Wrapper = styled.nav`
	  position:fixed;
	  Left: calc(-50vw + 50%);
	  right: calc(-50vw + 50%);
	  margin-left: auto;
	  margin-right: auto;
	  top:0px;
	  /* transform:translateX(-50%); */
	  height:90px;
	  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
	  display:flex;
	  align-items:center;
	  z-index:100;
	  font-family: 'Rock Salt', cursive;
	  img{
		margin-left:40px;
		  width:auto;
		  height:50px;  
	  };
	
	`
	const ToggleButton = styled.div`
		margin-left:20px;
		visibility:hidden;
		@media(max-width:590px){
		  visibility:visible;
		  }	
	`
	
	const MenuItems = styled.div`
	  display:visible;
	  ul{
		display:flex; 
		  align-items:center;  
	  }
	
	  li{
		  list-style:none;
	  }
	
	  a{
		color:white;
	  margin-left:40px;
	  text-decoration:none;  
	  }

	  @media(max-width:590px){
		  display:none;
		  }
	
	  
	`
