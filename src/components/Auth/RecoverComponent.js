import React, { Component } from 'react';

import {
	Row,
	Col,
	Form,
	Button	
} from 'react-bootstrap';

class RecoverComponent extends Component {
	render() {
		return (
			<Row className="Recover">
			<Col>

			<Form onSubmit={this.handleSubmit}>

			<Form.Group>
			<Form.Label>Username / Email</Form.Label>
			<Form.Control type="text" name="recover-username"/>
			</Form.Group>

			<Button variant="primary" type="submit">Send</Button>
			</Form>

			</Col>
			</Row>
			);
	}
}

export default RecoverComponent;