import React, { Component, PropTypes } from 'react';

//import components
import NavBarBrand from '../../components/NavBarBrand';

const propTypes = {};

class NavBar extends Component {
    render() {
        return (
            <nav className="NavBar navbar navbar-default navbar-fixed-top navbar-reservalia">
                <div className="container">
                    <NavBarBrand brand={'Monitor Reservalia'} />
                    <p className="navbar-text navbar-right"><a href="#" className="navbar-link">Logout</a></p>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = propTypes;

export default NavBar;
