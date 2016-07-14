import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import css from './index.scss';

//import components
import NavBarDropDown from '../NavBarDropDown';

const propTypes = {
    data: React.PropTypes.object
};
/*
 * NavBar recien un objecto con toda la info para armar la barra de navegación.
 * linkNav es un array de objetos. Cada uno tiene las siguientes keys:
 *  1) name: nombre del link.
 *  2) route: ruta del link.
 *  3) icon: icono del link.
 * 1) y 2) tienen que estar si o si.
 * brandNav es el nombre de la aplicación
 * userNav nombre del usuario logeado.
 **/

class NavBar extends Component {
    render() {
        const {linkNav, userNav, brandNav} = this.props.data;
        let linksNav = [];
        for (let i = 0; i < linkNav.length; i++) {
            linksNav.push(<li key={linkNav[i].name.toLowerCase()}><Link to={linkNav[i].route}>{linkNav[i].name}</Link></li>);
        }

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
                        <Link className="navbar-brand" to="/">{brandNav}</Link>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-left top-nav">
                            {linksNav}
                        </ul>
                        <ul className="nav navbar-right top-nav">
                            <NavBarDropDown user={userNav}/>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

NavBar.propTypes = propTypes;

export default NavBar;
