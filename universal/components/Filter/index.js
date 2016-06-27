import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
    chargeInput: React.PropTypes.func
};

class Filter extends Component {
    render() {
        return (
            <div className="Filter">
                <div className="filter">
                    <form className="form-inline">
                        <div className="form-group">
                            <label className="label-margin">Search: </label>
                            <input className="form-control" type="text" value={this.props.filter} onChange={this.props.chargeInput} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Filter.propTypes = propTypes;
export default Filter;