import React, { Component, PropTypes } from 'react';

//import components
import Table from '../../components/Table';
import SearchBoxDate from '../../components/SearchBoxDate';

const propTypes = {};

class AvailabilityBox extends Component {
    render() {
        return (
            <div className="AvailabilityBox" id="page-wrapper">
                <SearchBoxDate />
                <Table />
            </div>
        );
    }
}

AvailabilityBox.propTypes = propTypes;
export default AvailabilityBox;
