import React, { Component } from 'react';
import './index.scss';

import NavBar from '../../containers/NavBar';

import DevTools from '../devTools';

class Root extends Component {
  render() {
    return (
        <div>
          <NavBar />
        </div>
    )
  }
}

export default Root;