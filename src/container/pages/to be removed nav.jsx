import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import logo from '../../../src/logowhite.png';
const nav = () => {
	// const navStyle = {
	// 	color: 'white',
	// 	paddingLeft: '20px',
	// 	paddingTop: '40px'
	// };

	return (
		<div className={styles.nav}>
			<div className={styles.logoplacement}>
				<img src={logo} alt='logo'/>
				<h2>TeaseWear</h2>
			</div>
			<ul>
				<Link className={styles.nav} to='/'>
					<li>Home</li>
				</Link>

				<Link className={styles.nav} to='/about'>
					<li>About</li>
				</Link>

				<Link className={styles.nav} to='/Contact'>
					<li>Contact Me</li>
				</Link>

				{/* Grouped separately */}
				<Link className={styles.nav} to='/Products'>
					<li>Products</li>
				</Link>
	
			</ul>
		</div>
	);
};

export default nav;
