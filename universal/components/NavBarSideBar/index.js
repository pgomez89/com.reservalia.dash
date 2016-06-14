import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
};
/*
* Cargar botones dinamicamente
* */
class NavBarSideBar extends Component {
  render() {
    return (
        <ul className="NavBarSideBar nav navbar-nav side-nav">
            <li className="active">
                <a href="tables.html"><i className="fa fa-fw fa-table"></i> Disponibilidad</a>
            </li>
        </ul>
    );
  }
}

NavBarSideBar.propTypes = propTypes;
export default NavBarSideBar;
