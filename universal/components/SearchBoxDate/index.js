import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {};

class SearchBoxDate extends Component {
    render() {
        return (
            <div className="SearchBoxDate">
                <div className="col-lg-12 buscador-fecha">
                    <form className="form-inline">
                        <div className="form-group">
                            <label className="label-margin">From</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label className="label-margin">To</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <button className="btn btn-default">
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

SearchBoxDate.propTypes = propTypes;
export default SearchBoxDate;
