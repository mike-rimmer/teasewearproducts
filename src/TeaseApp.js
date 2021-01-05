import React, { useState } from 'react';
import Home from './container/pages/HomePage/home';
import Contact from './container/pages/ContactPage/contact';
import About from './container/pages/AboutPage/about';
// import Garment from './container/pages/GarmentPage/garmentPage';
import NavMenu from './components/sideNavMenu/navMenu';
import SideDrawer from './components/sideNavMenu/sideDrawer';
import BackDrop from './components/sideNavMenu/backDrop';
import OrderPage from './container/pages/OrderPage/orderpage';
// import Test from './test'
import { Route } from 'react-router-dom';




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
		<div>
			<NavMenu clickHandler={SideDrawerToggleClickHander} />
			<SideDrawer show={sideDrawerOpen} />
			{backDrop}
			{/* <div style={{ marginTop: '80px' }} /> */}
			{/* End of Navigation Menu */}
			{/* <Switch> */}
			{/* Note the route path refers to the localsite url so in the case of localhost
					    and are initially defined in the Nav Menu component
						localhost or the server root is understood 
						so path = '/' would translate to "localhost/"
						and path = '/about' would translate to "localhost/about"
					and so on.*/}
 
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} /> 
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

			<Route path={`/garment/show/pricing/:id`} render={(props) => <OrderPage {...props} />} />

			<Route path={`/garment/regular/pricing/:id`} render={(props) => <OrderPage {...props} />} />

			<Route
				path='/garment/regular/raincoats'
				render={(props) => <OrderPage garmentType='Rain Coats' {...props} />}
			/>
			<Route
				// exact strict
				path={`/garment/regular/coolingcoats`}
				render={(props) => <OrderPage garmentType='Cooling Coats' {...props} />}
			/>

			<Route
				path='/garment/show/wintercoats'
				render={(props) => <OrderPage garmentType='Winter Coats' {...props} />}
			/>

			<Route
				// exact strict
				path='/garment/regular/splashpants'
				render={(props) => <OrderPage garmentType='Splash Pants' {...props} />}
			/>

			<Route
				// exact strict
				path='/garment/regular/diapers'
				render={(props) => <OrderPage garmentType='Diapers' {...props} />}
			/>

			<Route
				// exact strict
				path='/garment/regular/bellybands'
				render={(props) => <OrderPage garmentType='Belly Bands' {...props} />}
			/>
			<Route
				// exact strict
				path='/garment/regular/hats'
				render={(props) => <OrderPage garmentType='Hats' {...props} />}
			/>
			<Route
				// exact strict
				path='/garment/show/bibs'
				render={(props) => <OrderPage garmentType='Bibs' {...props} />}
			/>
			<Route
				// exact strict
				path='/garment/show/bodysocks'
				render={(props) => <OrderPage garmentType='Body Socks' {...props} />}
			/>
			<Route
				// exact strict
				path='/garment/show/pyjamas'
				render={(props) => <OrderPage garmentType='P J' {...props} />}
			/>
			<Route
				// exact strict
				path='/garment/show/peewraps'
				render={(props) => <OrderPage garmentType='Pee Wraps' {...props} />}
			/>
			<Route
				// exact strict
				path='/garment/show/snoods'
				render={(props) => <OrderPage garmentType='Snoods' {...props} />}
			/>
			<Route
				// exact strict
				path='/garment/show/warmingcoats'
				render={(props) => <OrderPage garmentType='Warming Coat' {...props} />}
			/>
		</div>
	);
};
export default TeaseApp;


