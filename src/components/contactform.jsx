import React, { useState } from 'react';
import styles from '../components/contactform.module.css';
import axios from 'axios'

const ContactForm = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ msg, setMsg ] = useState('');
	const [ error, setError ] = useState('');
	const [ mailSent, setMailSent ] = useState('');
	const API_PATH = 'http://localhost/server'

	const handleFormSubmit = (e) => {
		e.preventDefault();
		axios({
		  method: 'post',
		  url: `${API_PATH}`,
		  headers: { 'content-type': 'application/json' },
		  data: {
			  name,
			  email,
			  msg
			}
		})
		  .then(result => {
			setMailSent({result})
		  })
		  .catch(error => setError({ error }));
		console.log('Your name is:', name);
		console.log('Email:', email);
		console.log('Message:', msg);
	};

	const nameChangeHandler = (e) => {
		console.log(e.target.value);
		setName(e.target.value);
	};

	return (
		<React.Fragment>
			<div className={styles.formcard}>
				<h3>Contact Form</h3>
				<p>
					If you prefer to send me an email, I would be happy to answer specific questions or needs. Please
					fill out the contact details below and I will get back to you.
				</p>
				<form id='contactus' action='localhost/teasewear-react/public/email.php' method='POST'>
					<div className={styles.lineItem}>
						<label for='name'>Name:</label>
						<input
							id='name'
							name='name'
							type='text'
							placeholder='Enter your Name'
							value={name}
							onChange={nameChangeHandler}
						/>
					</div>

					<div className={styles.lineItem}>
						<label for='email'>Email:</label>
						<input
							id='email'
							name='email'
							type='email'
							placeholder='jdoe@email.com'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className={styles.lineItem}>
						<label for='message'>Message</label>
						<textarea
							name='message'
							id='message'
							// cols='10'
							// rows='6'
							placeholder='Enter your messages here'
							onChange={(e) => setMsg(e.target.value)}
						/>
					</div>
					<div>
						<input
							style={{
								width: 100,
								marginTop: 50,
								marginBottom: 50
							}}
							type='submit'
							name='submit'
							onClick={(e) => handleFormSubmit(e)}
							value='Submit'
						/>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};
export default ContactForm;
