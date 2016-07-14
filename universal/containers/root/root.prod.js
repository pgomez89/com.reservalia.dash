import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routing from '../routes.js';
export default class RootContainer extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Router history={browserHistory}>
            {routing}
          </Router>
        </div>
      </Provider>
    );
  }
};
