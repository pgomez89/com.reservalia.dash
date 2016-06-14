import React, { Component, PropTypes } from 'react';
import css from './index.scss';

//import components
import NavBarSideBar from '../NavBarSideBar';
import NavBarDropDown from '../NavBarDropDown';

const propTypes = {};
/*
 * Cargar dinamicamente en el nav dropdown o botones depende que corresponda
 * */
class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">SB Admin</a>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-right top-nav">
                            <NavBarDropDown />
                        </ul>
                        <NavBarSideBar />
                    </div>
                </nav>
            </div>
        )
    }
}

NavBar.propTypes = propTypes;

export default NavBar;

