import React, { Component } from 'react';

import {
	Row,
	Col,
	Form,
	Button	
} from 'react-bootstrap';

import { createFormData } from '../../utils/FormEvents';

class RegisterComponent extends Component {

	handleSubmit(evt) {
		evt.preventDefault();

		const data = createFormData(evt.target);

		for (var value of data.values()) {
		   console.log(value); 
		}
	}
	render() {
		return (
			<Row className="Register">
			<Col>

			<Form onSubmit={this.handleSubmit}>

				<Form.Group controlId="formBasicEmail">
	    			<Form.Label>Name</Form.Label>
				    <Form.Control type="text" placeholder="Enter full name" name="register-name"/>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
	    			<Form.Label>Email</Form.Label>
				    <Form.Control type="text" placeholder="Enter email" name="register-email"/>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
	    			<Form.Label>Password</Form.Label>
				    <Form.Control type="password" name="register-password"/>
				</Form.Group>

				<Button variant="primary" type="submit">Send</Button>
			</Form>
				</Col>
			
			</Row>
			);
	}
}

export default RegisterComponent;