import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import css from './index.scss';

//import components
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
                        <Link className="navbar-brand" to="/">{this.props.data.brandNav}</Link>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-left top-nav">
                            {
                                this.props.data.linkNav.map(link => {
                                    return (
                                        <li key={link.name.toLowerCase()}>
                                            <Link to={link.route}><i
                                                className={"fa fa-fw fa-"+link.icon}></i> {link.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="nav navbar-right top-nav">
                            <NavBarDropDown user={this.props.data.userNav}/>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

NavBar.propTypes = propTypes;

export default NavBar;

