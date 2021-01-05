import React from 'react';
import { ContactCard } from '../../../components/components';
import ContactForm from '../../../components/Form/form'
import styled from 'styled-components'
import Footer from '../../../components/footer/footer'


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
		<Container>
			<Wrapper>
				<ContactCard/>
				<ContactForm config = {config} />
			</Wrapper>
			<Footer/>
			{/* <ContainerFooter>
			</ContainerFooter> */}
		</Container>
	);
};

const Container = styled.div`
  display: grid;
  grid-template-columns:auto;
  grid-template-rows:auto;
  grid-template-areas:
  'wrapper'
  'foot'; 
  padding-bottom:1em;
`;

// const ContainerFooter = styled.div`
//     grid-area:footer;
// `;

const Wrapper = styled.div`
	grid-area: wrapper;
    top:5em;
    display:grid;
	grid-template-columns: 1fr;
	flex-direction:column;
	padding-bottom:1em;
	@media(min-width:1030px)
	 {
	 padding:2em;
	 grid-template-columns: 1fr 1fr;
}
`

export default Contact;
