import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {};

class SearchBoxDate extends Component {
    render() {
        return (
            <div className="SearchBoxDate">
                <form>
                    <div className="form-group">
                        <label className="label-margin">From: </label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label className="label-margin">To: </label>
                        <input className="form-control" type="text"/>
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
