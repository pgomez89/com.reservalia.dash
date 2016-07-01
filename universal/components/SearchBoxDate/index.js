import React, { Component, PropTypes } from 'react';

import css from './index.scss';
import * as styleDatePicker from 'react-datepicker/dist/react-datepicker.css';

//import components
import DatePicker from 'react-datepicker';

const propTypes = {};

class SearchBoxDate extends Component {
    render() {
        return (
            <div className="SearchBoxDate">
                <form>
                    <div className="form-group">
                        <label className="label-margin">From: </label>
                        <DatePicker className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="label-margin">To: </label>
                        <DatePicker className="form-control"/>
                    </div>
                    <button className="btn btn-default btn-block btn-warning">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

SearchBoxDate.propTypes = propTypes;
export default SearchBoxDate;


/*
<DatePicker
    selected={this.state.startDate}
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeStart} />
<DatePicker
selected={this.state.endDate}
startDate={this.state.startDate}
endDate={this.state.endDate}
onChange={this.handleChangeEnd} />*/
