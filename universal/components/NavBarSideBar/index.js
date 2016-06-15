import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
                <Link to="/"><i className="fa fa-fw fa-dashboard"></i> Dashboard</Link>
            </li>
            <li className="active">
                <Link to="/availability"><i className="fa fa-fw fa-table"></i> Disponibilidad</Link>
            </li>
        </ul>
    );
  }
}

NavBarSideBar.propTypes = propTypes;
export default NavBarSideBar;
