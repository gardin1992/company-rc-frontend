import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import {
  mappingRoutes,
  getBaseRoute
} from './utils/Router';

class App extends Component {


  mappingRoutes() {
    
    const baseRoute = getBaseRoute() ? getBaseRoute() + '/' : '';

    return mappingRoutes((item, key) => {
      return <Route key={key} path={baseRoute + item.path} exact={!!item.exact} component={item.component} />
    });
  }

  render() {

    const routes = this.mappingRoutes();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a href="/">Go to Home</a>
        </header>
      <BrowserRouter>
        <Switch>
        {routes}
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
