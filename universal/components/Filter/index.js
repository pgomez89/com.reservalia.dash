import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
    chargeInput: React.PropTypes.func,
    filterText: React.PropTypes.string
};

class Filter extends Component {
    render() {
        const {filterText, chargeInput} = this.props;
        return (
            <div className="Filter">
                <form className="form-inline">
                    <div className="form-group">
                        <label className="label-margin">Search: </label>
                        <input className="form-control" type="text" value={filterText}
                               onChange={chargeInput}/>
                    </div>
                </form>
            </div>
        );
    }
}

Filter.propTypes = propTypes;
export default Filter;
