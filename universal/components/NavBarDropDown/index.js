import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import css from './index.scss';

const propTypes = {};

/*
 * NavBarDropDown recibe como prop el nombre del user
 * */
class NavBarDropDown extends Component {
    render() {
        return (
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                    className="fa fa-user"></i> {this.props.user} <b className="caret"></b></a>
                <ul className="dropdown-menu">
                    <li>
                        <Link to="/logout"><i className="fa fa-fw fa-power-off"></i> Log Out</Link>
                    </li>
                </ul>
            </li>
        );
    }
}

NavBarDropDown.propTypes = propTypes;
export default NavBarDropDown;
