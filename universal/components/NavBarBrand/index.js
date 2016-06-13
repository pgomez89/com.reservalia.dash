import React, { Component, PropTypes } from 'react';
import './index.scss'

const propTypes = {};

class NavBarBrand extends Component {
    render() {
        var {brand} = this.props;

        return (
            <div className="NavBarBrand navbar-header">
                <a className="navbar-brand" href="#">{brand}</a>
            </div>
        );
    }
}

NavBarBrand.propTypes = propTypes;
export default NavBarBrand;
