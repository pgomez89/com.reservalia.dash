import React, {Component} from 'react';

//import component
import BrandNavBar from './BrandNavBar';

class NavBar extends Component {
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top navbar-reservalia">
        <div className="container">
          <BrandNavBar />
          <p className="navbar-text navbar-right"><a href="/logout" className="navbar-link">Logout</a></p>
        </div>
      </nav>
    )
  }
}

export default NavBar;
