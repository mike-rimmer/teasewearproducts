import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.css';
import styled from 'styled-components'
/**
 * @component Form
 * @props - { object } -  config
 */

const Wrapper = styled.div`
width:90%;
margin: 0 auto;
margin-top:2.5em;
background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
box-shadow: 7px 16px 16px rgba(12,12,12,.5);
border-radius: 1em;
padding:1em;
@media(max-width:1030px){
    width:100%;
}
`

class Form extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			mailSent: false,
			error: null
		};
	}
	/**
  * @function handleFormSubmit
  * @param e { obj } - form event
  * @return void
  */

	handleFormSubmit = (e) => {
		e.preventDefault();
		axios({
			method: 'post',
			// TODO:The process.env will only work for production therefore test for development or production environment and select on that basis
			// url: `${process.env.REACT_APP_API}`,
			// use for localhost testing
			url: 'http://localhost/teasewear-react/api/contact/index.php',
			// USE FOR PRODUCTION
			// url: 'http://teasewearproducts.com/api/contact/index.php',
			headers: { 'content-type': 'application/json' },
			data: this.state
		})
			.then((result) => {
				if (result.data.sent) {
					this.setState({
						mailSent: result.data.sent
					});
					this.setState({ error: false });
				} else {
					this.setState({ error: true });
				}
			})
			.catch((error) => this.setState({ error: error.message }));
	};
	/**
    * @function handleChange
    * @param e { obj } - change event
    * @param field { string } - namve of the field
    * @return void
    */
	handleChange = (e, field) => {
		let value = e.target.value;
		let updateValue = {};
		updateValue[field] = value;
		this.setState(updateValue);
	};

	
	render () {
		const { title, successMessage, errorMessage, fieldsConfig } = this.props.config;
		return (
			<Wrapper>
				<h2>{title}</h2>
				<div>
					<form action='#'>
						{fieldsConfig &&
							fieldsConfig.map((field) => {
								return (
									<React.Fragment key={field.id}>
										{field.type !== 'textarea' ? (
											<React.Fragment>
												<label>{field.label}</label>
												<input
													type={field.type}
													className={field.className}
													placeholder={field.placeholder}
													// value={field.name}
													onChange={(e) => this.handleChange(e, field.fieldName)}
												/>
											</React.Fragment>
										) : (
											<React.Fragment>
												<label>{field.label}</label>
												<textarea
													className={field.className}
													placeholder={field.placeholder}
													onChange={(e) => this.handleChange(e, field.fieldName)}
													value={field.name}
												/>
											</React.Fragment>
										)}
									</React.Fragment>
								);
							})}
						<input type='submit' onClick={(e) => this.handleFormSubmit(e)} value='Submit' />
						<div>
							{this.state.mailSent && <div className='success'>{successMessage}</div>}
							{this.state.error && <div className='error'>{errorMessage}</div>}
						</div>
					</form>
				</div>
			</Wrapper>
		);
	}
}

export default Form;
//propTypes for the component
Form.propTypes = {
	config: PropTypes.object.isRequired
};
