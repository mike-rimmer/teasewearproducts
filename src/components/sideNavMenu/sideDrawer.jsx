import React from 'react';
import {Link} from 'react-router-dom';
import  './sideDrawer.css';
import styled from 'styled-components'

const sideDrawer = (props) => {
	let DrawerStatus = '';
	if (props.show) {
		DrawerStatus = 'DrawerOpen';
	}

	
	
	const SideDrawer = styled.div`
    height:25%;
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%); box-shadow: 2px 0 5px rgba(0,0,0, 1);
    position:fixed;
    top:5.5em;
    left:0;
    width:22%;
    min-width:200px;
    z-index:105;
    padding-left:1em;
    font-family: 'Rock Salt', cursive;
	transform : translateX(-110%);
	transition: transform 0.5s ease-out;

	@media(min-width:1030px){
		${'' /* display:none;	 */}
	}
`

const MenuItems = styled.ul`
 list-style:none;
    padding:0px;
    height:30%;
    display:flex;
    flex-direction: column; 

	a{
	color:white;
    text-decoration: none;
}
`

	return (
		<SideDrawer className = {DrawerStatus} >
		<MenuItems >
			{/* <h1>Menu Items</h1> */}
				<Link to='/' className='sideNav'>
					<li>Home</li>
				</Link>
				<Link to='/about'className='sideNav'>
					<li>About</li>
				</Link>
				<Link to='/contact'className='sideNav'>
					<li>Contact</li>
				</Link>
			</MenuItems>
		</SideDrawer>
	);
};

export default sideDrawer;
