import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import css from './index.scss';

const propTypes = {
    user: React.PropTypes.string
};

/*
 * NavBarDropDown recibe como prop el nombre del user
 * */
class NavBarDropDown extends Component {
    render() {
        const {user} = this.props;
        return (
            <li className="NavBarDropDown dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">{user}<b className="caret"></b></a>
                <ul className="dropdown-menu">
                    <li>
                        <Link to="/logout">Log Out</Link>
                    </li>
                </ul>
            </li>
        );
    }
}

NavBarDropDown.propTypes = propTypes;
export default NavBarDropDown;
