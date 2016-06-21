import React, { Component, PropTypes } from 'react';

//import components
import NavBar from '../../components/NavBar';
import AvailabilityBox from '../../containers/AvailabilityBox';

const propTypes = {};

const dataNav = {
    userNav: 'admin',
    brandNav: 'Monitor Reservalia',
    linkNav: [
        {
            name: 'Dashboard',
            route: '/',
            icon: 'dashboard'
        },
        {
            name: 'Disponibilidad',
            route: '/availability',
            icon: 'table'
        }
    ]
};

class MonitorApp extends Component {
    render() {
        return (
            <div className="MonitorApp" id="wrapper">
                <NavBar data={dataNav}/>
                {this.props.children}
            </div>
        );
    }
}

MonitorApp.propTypes = propTypes;
export default MonitorApp;
