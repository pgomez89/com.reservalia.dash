import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//import components
import Table from '../../components/Table';
import SearchBoxDate from '../../components/SearchBoxDate';
import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';
import ShowPages from '../../components/ShowPages';

const propTypes = {};


class AvailabilityBox extends Component {
    constructor() {
        super();
    }

    render() {
        const { visibleData } = this.props.availability;
        return (
            <div className="AvailabilityBox" id="page-wrapper">
                <h1>Disponibilidad</h1>
                <hr />
                <div className="row tool-bar">
                    <div className="col-lg-12">
                        <SearchBoxDate />
                    </div>
                </div>
                <div className="row tool-bar">
                    <div className="col-lg-7">
                        <ShowPages />
                    </div>
                    <div className="col-lg-5">
                        <Filter />
                    </div>
                </div>
                <Table data={ visibleData }/>
                <Pagination />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        availability: state.appReducers.availability
    };
};

AvailabilityBox.propTypes = propTypes;
export default connect(
    mapStateToProps
)(AvailabilityBox);
