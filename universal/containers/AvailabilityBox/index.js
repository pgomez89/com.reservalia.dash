import React, { Component, PropTypes } from 'react';

//import components
import Table from '../../components/Table';
import SearchBoxDate from '../../components/SearchBoxDate';
import Filter from '../../components/Filter';
import css from './index.scss';

const propTypes = {};

class AvailabilityBox extends Component {
    render() {
        return (
            <div className="AvailabilityBox" id="page-wrapper">
                <h1>Disponibilidad</h1>
                <hr />
                <div className="row tool-bar">
                    <div className="col-lg-7">
                        <SearchBoxDate />
                    </div>
                    <div className="col-lg-5">
                        <Filter />
                    </div>
                </div>
                <Table />
            </div>
        );
    }
}

AvailabilityBox.propTypes = propTypes;
export default AvailabilityBox;
