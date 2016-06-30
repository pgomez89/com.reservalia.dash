import React, { Component, PropTypes } from 'react';

//import components
import Table from '../../components/Table';
import SearchBoxDate from '../../components/SearchBoxDate';

const propTypes = {};

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="Dashboard" id="page-wrapper">
                    <h1>Dashboard</h1>
                    <hr />
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = propTypes;
export default Dashboard;
