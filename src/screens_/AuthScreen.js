import React, { Component } from 'react';

import {Container} from 'react-bootstrap';

import LoginComponent from '../components/Auth/LoginComponent';
import RegisterComponent from '../components/Auth/RegisterComponent';
import RecoverComponent from '../components/Auth/RecoverComponent';

class AuthScreen extends Component {
	render() {
		return (
			<Container className="Auth">

			<LoginComponent />
			<RegisterComponent />
			<RecoverComponent />

			</Container>
			);
	}
}

export default AuthScreen;