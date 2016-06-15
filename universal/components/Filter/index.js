import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
};

class Filter extends Component {
  render() {
    return (<div className="Filter">
        <div className="filter">
            <form className="form-inline">
                <div className="form-group">
                    <label className="label-margin">Filtrar</label>
                    <input className="form-control" type="text"/>
                </div>
            </form>
        </div>
            </div>);
  }
}

Filter.propTypes = propTypes;
export default Filter;
