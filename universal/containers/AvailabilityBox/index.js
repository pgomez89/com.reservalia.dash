import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions
import { chargeFilter, changePageNumber, selectShowRows, fetchAvailability, changeNextPage, changePreviousPage, sortRows } from '../../actions/AvailabilityActions';

//import components
import Table from '../../components/Table';
import SearchBoxDate from '../../components/SearchBoxDate';
import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';
import ShowPages from '../../components/ShowPages';
import Loading from '../../components/Loading';

const propTypes = {};


class AvailabilityBox extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handlePageNumber = this.handlePageNumber.bind(this);
        this.handleShowRows = this.handleShowRows.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePreviousPage = this.handlePreviousPage.bind(this);
        this.handleSortRows = this.handleSortRows.bind(this);
    }

    componentDidMount() {
        this.props.fetchAvailability(true);
    }

    handleChange(e) {
        this.props.chargeFilter(e.target.value);
    }

    handlePageNumber(e) {
        this.props.changePageNumber(e.target.value);
    }

    handleNextPage() {
        this.props.changeNextPage();
    }

    handlePreviousPage() {
        this.props.changePreviousPage();
    }

    handleShowRows(e) {
        this.props.selectShowRows(parseInt(e.target.value));
    }

    handleSortRows(e) {
        this.props.sortRows(e.target.value);
    }

    render() {
        const { visibleData, filterText, pagination, isFetching, headers,  } = this.props.availability;
        var visibleBox = [];

        if (isFetching) {
            visibleBox.push(<Loading key="loading"/>);
        } else {
            visibleBox.push(<Table key="table" headers={headers} data={ visibleData } sortRows={this.handleSortRows}/>);
            visibleBox.push(<Pagination key="pagination" pages={pagination.pages} actualPage={pagination.actualPage}
                                        clickNumberPage={this.handlePageNumber} clickNextPage={this.handleNextPage}
                                        clickPreviousPage={this.handlePreviousPage}/>);
        }


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
                        <ShowPages selectCantRows={this.handleShowRows}/>
                    </div>
                    <div className="col-lg-5">
                        <Filter filterText={filterText} chargeInput={this.handleChange}/>
                    </div>
                </div>
                {visibleBox}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        availability: state.appReducers.availability
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        chargeFilter,
        changePageNumber,
        selectShowRows,
        fetchAvailability,
        changeNextPage,
        changePreviousPage,
        sortRows
    }, dispatch);
};

AvailabilityBox.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AvailabilityBox);
