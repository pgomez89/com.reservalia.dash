import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import actions
import { chargeFilter, changePageNumber, selectShowRows, fetchAvailability,
    changeNextPage, changePreviousPage, sortRows, selectStartDate, selectEndDate } from '../../actions/AvailabilityActions';

//import components
import Table from '../../components/Table';
import SearchBoxDate from '../../components/SearchBoxDate';
import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';
import ShowPages from '../../components/ShowPages';
import Loading from '../../components/Loading';
import SideToolBarAvailability from '../../components/SideToolBarAvailability';
import ErrorBox from '../../components/ErrorBox';

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
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    componentDidMount() {
        const {filterText,sort,pagination} = this.props.availability;
        this.props.fetchAvailability(true, filterText, sort, pagination);
    }

    handleChange(e) {
        const {data, pagination} = this.props.availability;
        this.props.chargeFilter(e.target.value, data, pagination);
    }

    handlePageNumber(e) {
        const {data, filterText} = this.props.availability;
        const {itemsPerPage} = this.props.availability.pagination;

        this.props.changePageNumber(e.target.value, data, filterText, itemsPerPage);
    }

    handleNextPage() {
        const {data, filterText, pagination} = this.props.availability;
        this.props.changeNextPage(data, filterText, pagination);
    }

    handlePreviousPage() {
        const {data, filterText, pagination} = this.props.availability;
        this.props.changePreviousPage(data, filterText, pagination);
    }

    handleShowRows(e) {
        const {data, filterText, pagination} = this.props.availability;
        this.props.selectShowRows(parseInt(e.target.value), data, filterText, pagination);
    }

    handleSortRows(e) {
        const {data, filterText, sort} = this.props.availability;
        const {itemsPerPage} = this.props.availability.pagination;
        this.props.sortRows(e.target.value, data, filterText, sort, itemsPerPage);
    }

    handleChangeStart(date) {
        this.props.selectStartDate(date);
    }

    handleChangeEnd(date) {
        this.props.selectEndDate(date);
    }


    render() {
        const { visibleData, filterText, pagination, isFetching, headers, sort, isErrorFilter, isErrorFetch, startDate, endDate  } = this.props.availability;
        var visibleBox = [];

        if (isFetching) {
            visibleBox.push(<Loading key="loading"/>);
        } else {
            if (isErrorFetch) {
                visibleBox.push(<ErrorBox/>);
            } else {
                visibleBox.push(<Table key="table" headers={headers} data={ visibleData } sortRows={this.handleSortRows}
                                       sort={sort} isErrorFilter={isErrorFilter}/>);
                visibleBox.push(<Pagination key="pagination" pages={pagination.pages} actualPage={pagination.actualPage}
                                            clickNumberPage={this.handlePageNumber} clickNextPage={this.handleNextPage}
                                            clickPreviousPage={this.handlePreviousPage}/>);
            }
        }


        return (
            <div className="container-fluid">
                <div className="AvailabilityBox" id="page-wrapper">
                    <div className="row">
                        <h1>Availability</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <SideToolBarAvailability filterText={filterText} startDate={startDate} endDate={endDate} selectCantRows={this.handleShowRows}
                                                     chargeInput={this.handleChange}
                                                     changeStartDate={this.handleChangeStart}
                                                     changeEndDate={this.handleChangeEnd}/>
                        </div>
                        <div className="col-lg-10">
                            {visibleBox}
                        </div>
                    </div>
                </div>
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
        sortRows,
        selectStartDate,
        selectEndDate
    }, dispatch);
};

AvailabilityBox.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AvailabilityBox);
