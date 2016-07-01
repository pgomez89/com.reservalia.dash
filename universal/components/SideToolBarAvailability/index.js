import React, { Component, PropTypes } from 'react';

import css from './index.scss';
require('react-datepicker/dist/react-datepicker.css');

//import components
import SearchBoxDate from '../SearchBoxDate';
import ShowPages from '../ShowPages';
import Filter from '../Filter';

const propTypes = {
    selectCantRows: React.PropTypes.func,
    chargeInput: React.PropTypes.func,
    changeStartDate : React.PropTypes.func,
    changeEndDate : React.PropTypes.func,
    filterText: React.PropTypes.string
};

class SideToolBarAvailability extends Component {

    render() {
        return (
            <div className="SideToolBarAvailability row">
                <div className="col-lg-12">
                    <Filter filterText={this.props.filterText} chargeInput={this.props.chargeInput}/>
                    <hr/>
                </div>
                <div className="col-lg-12">
                    <ShowPages selectCantRows={this.props.selectCantRows}/>
                    <hr/>
                </div>
                <div className="col-lg-12">
                    <SearchBoxDate startDate={this.props.startDate} endDate={this.props.endDate} changeStartDate={this.props.changeStartDate} changeEndDate={this.props.changeEndDate}/>
                </div>
            </div>
        );
    }
}

SideToolBarAvailability.propTypes = propTypes;
export default SideToolBarAvailability;
