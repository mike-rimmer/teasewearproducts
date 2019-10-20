import React, { useState } from 'react';
import Home from './container/pages/HomePage/home';
import Contact from './container/pages/ContactPage/contact';
import About from './container/pages/AboutPage/about';
// import Garment from './container/pages/GarmentPage/garmentPage';
import NavMenu from './components/sideNavMenu/navMenu';
import SideDrawer from './components/sideNavMenu/sideDrawer';
import BackDrop from './components/sideNavMenu/backDrop';
import InfoPage from './container/pages/InfoPage/infoPage';
// import Test from './test'
import { Route } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
width:100%;
max-width:1024px;
margin:0 auto;
`

const TeaseApp = () => {
	// Logic  to open and close Menu Side Drawer
	const [ sideDrawerOpen, SetSideDrawerOpen ] = useState(false);

	const SideDrawerToggleClickHander = () => {
		SetSideDrawerOpen(!sideDrawerOpen);
		//console.log('Side Drawer is:', sideDrawerOpen);
	};

	const backDropClickHandler = () => {
		//console.log('BackDrop Clicked');
		SetSideDrawerOpen(false);
	};

	let backDrop;

	if (sideDrawerOpen) {
		backDrop = <BackDrop clickHandler={backDropClickHandler} />;
	}
	// **** end of logic to open and close Menu Side Drawer
	// const SHOWBALLOON = true;
	// const HIDEBALLOON = false;
	return (
		// {/* Navigation Menu */}
		<Wrapper>
			<NavMenu clickHandler={SideDrawerToggleClickHander} />
			<SideDrawer show={sideDrawerOpen} />
			{backDrop}
			<div style={{ marginTop: '80px' }} />
			{/* End of Navigation Menu */}
			{/* <Switch> */}
			{/* Note the route path refers to the localsite url so in the case of localhost
					    and are initially defined in the Nav Menu component
						localhost or the server root is understood 
						so path = '/' would translate to "localhost/"
						and path = '/about' would translate to "localhost/about"
					and so on.*/}

			<Route     exact path='/' component={Home} />
			<Route     path='/about' component={About} />
			<Route     path='/contact' component={Contact} />
{/* The following Code has been removed since this functionality is no longer required
 */}
			{/* Product regular and Show lists Grouped together */}
			{/* <Route
			     exact strict
				path='/garment/regular' 
				render={(props) => (
					<Garment
						garmentType='regular'
						garmentTitle='Utility Garments'
						showBalloon={HIDEBALLOON}
						{...props}
					/>
				)}
			/>

			<Route
			    exact strict
				path='/garment/show' 
				render={(props) => (
					<Garment
						garmentType='show'
						garmentTitle='Garments Popular with the Show Community'
						showBalloon={HIDEBALLOON}
						{...props}
					/>
				)}
			/>
			 */}
			
			<Route
				path={`/garment/show/pricing/:id`} 
				render={(props) => (
					<InfoPage {...props}/>
				)}
			/>

			<Route
				path={`/garment/regular/pricing/:id`} 
				render={(props) => (
					<InfoPage {...props}/>
				)}
			/>

		

			<Route
				path='/garment/regular/raincoats'
				render={(props) => (
					<InfoPage
						garmentType='Rain Coats'
						{...props}
					/>
				)}
			/>
			<Route
			    // exact strict
				path={`/garment/regular/coolingcoats`}
				render={(props) => (
				<InfoPage
				garmentType='Cooling Coats'
				{...props}
				/>
				)}
			/>

			<Route
				path='/garment/show/wintercoats'
				render={(props) => (
					<InfoPage
						garmentType='Winter Coats'
						{...props}
					/>
				)}
			/>

			<Route
			    // exact strict
				path='/garment/regular/splashpants'
				render={(props) => (
				<InfoPage garmentType='Splash Pants'
				{...props}/>
				)}
			/>

			<Route
			    // exact strict
				path='/garment/regular/diapers'
				render={(props) => (
				<InfoPage garmentType='Diapers'
				{...props}/>
				)}
			/>

			<Route
			    // exact strict
				path='/garment/regular/bellybands'
				render={(props) => (
				<InfoPage garmentType='Belly Bands'
				{...props}/>
				)}
			/>
			<Route
			    // exact strict
				path='/garment/regular/hats'
				render={(props) => (
				<InfoPage garmentType='Hats'
				{...props}/>
				)}
			/>
			<Route
			    // exact strict
				path='/garment/show/bibs'
				render={(props) => (
				<InfoPage garmentType='Bibs'
				{...props}/>
				)}
			/>
			<Route
			    // exact strict
				path='/garment/show/bodysocks'
				render={(props) => (
				<InfoPage garmentType='Body Socks'
				{...props}/>
				)}
			/>
			<Route
			    // exact strict
				path='/garment/show/pyjamas'
				render={(props) => (
				<InfoPage garmentType='P J'
				{...props}/>
				)}
			/>
			<Route
			    // exact strict
				path='/garment/show/peewraps'
				render={(props) => (
				<InfoPage garmentType='Pee Wraps'
				{...props}/>
				)}
			/>
			<Route
			    // exact strict
				path='/garment/show/snoods'
				render={(props) => (
				<InfoPage garmentType='Snoods'
				{...props}/>
				)}
			/>
			<Route
			    // exact strict
				path='/garment/show/warmingcoats'
				render={(props) => (
				<InfoPage garmentType='Warming Coat'
				{...props}/>
				)}
			/>
		</Wrapper>
	);
};
export default TeaseApp;
