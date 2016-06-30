import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
    chargeInput: React.PropTypes.func
};

class Filter extends Component {
    render() {
        return (
            <div className="Filter">
                <form>
                    <div className="form-group">
                        <label className="label-margin">Search: </label>
                        <input className="form-control" type="text" value={this.props.filterText}
                               onChange={this.props.chargeInput}/>
                    </div>
                </form>
            </div>
        );
    }
}

Filter.propTypes = propTypes;
export default Filter;
