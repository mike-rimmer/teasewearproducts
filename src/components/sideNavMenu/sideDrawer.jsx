import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'


const sideDrawer = (props) => {
	let DrawerOpen = false;
	if (props.show) {
		DrawerOpen = true;
	}

		
	

	return (
		<SideDrawer open = {DrawerOpen}>
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
	transform: ${props => props.open ? 'translateX(0)' : 'translateX(-110%)'};  
    transition: transform .60s ease-out;

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
