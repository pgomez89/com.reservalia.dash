import React, { Component, PropTypes } from 'react';

import css from './index.scss';
import * as styleDatePicker from 'react-datepicker/dist/react-datepicker.css';

//import components
import DatePicker from 'react-datepicker';

const propTypes = {
    changeStartDate: React.PropTypes.func,
    changeEndDate: React.PropTypes.func,
    submitAvailability: React.PropTypes.func
};

class SearchBoxDate extends Component {
    render() {
        return (
            <div className="SearchBoxDate">
                <form>
                    <div className="form-group">
                        <label className="label-margin">From: </label>
                        <DatePicker className="form-control"
                                    dateFormat="DD/MM/YYYY"
                                    selected={this.props.startDate}
                                    startDate={this.props.startDate}
                                    endDate={this.props.endDate}
                                    onChange={this.props.changeStartDate}/>
                    </div>
                    <div className="form-group">
                        <label className="label-margin">To: </label>
                        <DatePicker className="form-control"
                                    dateFormat="DD/MM/YYYY"
                                    selected={this.props.endDate}
                                    startDate={this.props.startDate}
                                    endDate={this.props.endDate}
                                    onChange={this.props.changeEndDate}/>
                    </div>
                    <button className="btn btn-default btn-block btn-warning" onClick={this.props.submitAvailability}>
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
