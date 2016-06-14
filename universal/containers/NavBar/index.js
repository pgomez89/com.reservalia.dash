import React, { Component, PropTypes } from 'react';

//import components

const propTypes = {};

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            Monitor Reservalia
                        </a>
                    </div>
                    <ul className="nav navbar-right top-nav">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-user"></i> John Smith <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#"><i className="fa fa-fw fa-user"></i> Profile</a></li>
                                <li><a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a></li>
                                <li><a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a></li>
                                <li className="divider"></li>
                                <li><a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

NavBar.propTypes = propTypes;

export default NavBar;
