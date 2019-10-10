// First import BrowserRouter from 'react-router-dom' to the index.js file contained within the src directory. Now wrap the APP within the index.html with BrowserRoutersee line#12 and #14 of index.js.
// Secondly:  Within MikesRouterEX.js We will import Link, Route, Switch from react-router-dom
//Create a Nav menu using the <Link> component
//Create a path to the component (page) using the <Route> component
// Example Nav Home, About, Contact, Products,
import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Home from './container/pages/home'
import About from './container/pages/AboutPage/about'
import Garment from './container/pages/GarmentPage/garmentPage'
import Styles from './MikesRouter.module.css'






function MikesRouterEx(){
    return(
        <div className = {Styles.wrapper}>
        <h1>In Mikes Router Application</h1>
        <nav>
            <ul className={Styles.menu}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to ='/garments'>Garments</Link></li>
            </ul>
        </nav>

        <Route exact path ='/' component={Home} />
        <Route path ='/about' component = {About} /> 
        <Route path ='/contact'
        render ={
                ()=>(<h1>You have selected Contacts</h1>)
                }
            /> 
        <Route path ='/garments' render = {(props)=>(<Garment garmentType='regular' {...props} />)}/> 
        </div>
    )
}

export default MikesRouterEx