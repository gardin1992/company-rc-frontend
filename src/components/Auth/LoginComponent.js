import React, { Component } from 'react';

import {
	Row,
	Col,
	Form,
	Button	
} from 'react-bootstrap';

import { createFormData } from '../../utils/FormEvents';

class LoginComponent extends Component {

	state = {
		isEnable: false
	};

	handleSubmit(evt) {
		evt.preventDefault();
		const form = evt.target;
		const data = createFormData(form);

		/*
		fetch('/api/form-submit-url', {
			method: 'POST',
			body: data
		});
		*/
		for (var value of data.values()) {
		   console.log(value); 
		}
	}

	handleShowPassword = (isEnable, evt) => {

		this.setState({isEnable: !isEnable});
	}

	render() {

		const {isEnable} = this.state;

		return (
			<Row className="Login">
				<Col>
				<Form onSubmit={this.handleSubmit}>
	  			<Form.Group controlId="formBasicEmail">
	    			<Form.Label>Email address</Form.Label>
				    <Form.Control type="email" placeholder="Enter email" name="login-email"/>
				    <Form.Text className="text-muted">
				      We'll never share your email with anyone else.
				    </Form.Text>
	  			</Form.Group>

			  <Form.Group controlId="formBasicPassword">
			    <Form.Label>Password</Form.Label>
			    <Form.Control type={isEnable ? 'text' : 'password'} placeholder="Password" name="login-password"/>
			    <Button type="button" onClick={e => this.handleShowPassword(isEnable, e)}>Show Password</Button>
			  </Form.Group>
			  <Form.Group controlId="formBasicChecbox">
			    <Form.Check type="checkbox" label="Check me out" />
			  </Form.Group>
			  <Button variant="primary" type="submit">
			    Submit
			  </Button>
				</Form>;
				</Col>
			</Row>
			);
	}
}

export default LoginComponent;