import React from 'react';
import { ContactCard } from '../../../components/components';
import ContactForm from '../../../components/Form/form'
import styled from 'styled-components'

const Wrapper = styled.div`
    position:relative;
    top:5em;
    width:95%;
    display:flex;
    margin:0 auto;
    justify-content: center;
	@media(max-width:1030px)
	 {
	 flex-direction: column;
}


`
const Contact = () => {
	const config = {
		// api: `${process.env.REACT_APP_API}`,
		title: 'Contact Me',
		successMessage: 'Thank you for contacting me.',
		errorMessage: 'Sorry unable to send email.',
		// fields:{
		//   firstName: '',
		//   lastName: '',
		//   email: '',
		//   msg: ''
		// },
		fieldsConfig: [
			{
				id: 1,
				label: 'First Name',
				fieldName: 'firstName',
				type: 'text',
				placeholder: 'Your First Name',
				isRequired: true,
				className: 'first-name-field'
			},
			{
				id: 2,
				label: 'Last Name',
				fieldName: 'lastName',
				type: 'text',
				placeholder: 'Your Last Name',
				isRequired: true,
				className: 'last-name-field'
			},
			{
				id: 3,
				label: 'Email',
				fieldName: 'email',
				type: 'email',
				placeholder: ' Your Email',
				isRequired: true,
				className: 'email-field'
			},
			{
				id: 4,
				label: 'Message',
				fieldName: 'msg',
				type: 'textarea',
				placeholder: 'Enter your message here...',
				isRequired: true,
				className: 'message-field'
			}
		]
	};
	return (
		<div>
			{/* <h1>Contact page</h1> */}
			<Wrapper>
				<ContactCard/>
				<ContactForm config = {config} />
			</Wrapper>
		</div>
	);
};

export default Contact;
