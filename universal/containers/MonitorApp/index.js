import React, { Component, PropTypes } from 'react';

//import components
import NavBar from '../../components/NavBar';
import AvailabilityBox from '../../containers/AvailabilityBox';

const propTypes = {};

class MonitorApp extends Component {
    constructor(){
        super();
        this.state = {
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
        }
    }

    render() {
        return (
            <div className="MonitorApp" id="wrapper">
                <NavBar data={this.state}/>
                {this.props.children}
            </div>
        );
    }
}

MonitorApp.propTypes = propTypes;
export default MonitorApp;
