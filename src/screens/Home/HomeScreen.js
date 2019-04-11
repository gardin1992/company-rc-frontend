import React, { Component } from 'react';
//
import {
	ListGroup
} from 'react-bootstrap';

import {mappingRoutes} from '../../utils/Router';

class HomeScreen extends Component {

	mappingRoutes() {

		return mappingRoutes((item, key) => {
			return (<ListGroup.Item key={key} action href={item.path}>
				{item.name.toUpperCase()}
			</ListGroup.Item>)
		});
	}

	render() {

		const links = this.mappingRoutes();

		return (
			<div className="Home">
			<h1>Home Page</h1>

			<ListGroup>
				<ListGroup.Item as="li" active>
			    Auth Pages
			  </ListGroup.Item>
				{links}
			</ListGroup>;

			</div>
			);
	}
}

export default HomeScreen;
