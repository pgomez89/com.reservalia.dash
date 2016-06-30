import React, { Component, PropTypes } from 'react';

import css from './index.scss';

//import components
import SearchBoxDate from '../SearchBoxDate';
import ShowPages from '../ShowPages';
import Filter from '../Filter';

const propTypes = {
    selectCantRows: React.PropTypes.func,
    chargeInput: React.PropTypes.func,
    filterText: React.PropTypes.string
};

class SideToolBarAvailability extends Component {
    render() {
        return (
            <div className="SideToolBarAvailability row">
                <div className="col-lg-12">
                    <SearchBoxDate />
                    <hr/>
                </div>
                <div className="col-lg-12">
                    <ShowPages selectCantRows={this.props.selectCantRows}/>
                    <hr/>
                </div>
                <div className="col-lg-12">
                    <Filter filterText={this.props.filterText} chargeInput={this.props.chargeInput}/>
                </div>
            </div>
        );
    }
}

SideToolBarAvailability.propTypes = propTypes;
export default SideToolBarAvailability;
