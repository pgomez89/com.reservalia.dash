import React, { PropTypes, Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className='Monitor-header'>
          <h1>Monitor</h1>
          <div className='Monitor-links'>
            <IndexLink to='/' activeClassName='active'>Monitor</IndexLink>  
          </div>
        </header>
      </div>
    );
  }
}
