import React, { Component, PropTypes } from 'react';

import css from './index.scss';
import * as styleDatePicker from 'react-datepicker/dist/react-datepicker.css';

//import components
import DatePicker from 'react-datepicker';

const propTypes = {
    changeStartDate: React.PropTypes.func,
    changeEndDate: React.PropTypes.func,
    submitAvailability: React.PropTypes.func,
    startDate: React.PropTypes.object,
    endDate: React.PropTypes.object
};

class SearchBoxDate extends Component {
    render() {
        const {startDate, endDate, changeStartDate, changeEndDate, submitAvailability} = this.props;
        return (
            <div className="SearchBoxDate">
                <form className="form-inline">
                    <div className="form-group">
                        <label className="label-margin">From: </label>
                        <DatePicker className="form-control"
                                    dateFormat="DD/MM/YYYY"
                                    selected={startDate}
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={changeStartDate}/>
                    </div>
                    <div className="form-group">
                        <label className="label-margin">To: </label>
                        <DatePicker className="form-control"
                                    dateFormat="DD/MM/YYYY"
                                    selected={endDate}
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={changeEndDate}/>
                    </div>
                    <button className="btn btn-default btn-warning" onClick={submitAvailability}>
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

SearchBoxDate.propTypes = propTypes;
export default SearchBoxDate;
