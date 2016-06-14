import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
};

class Filter extends Component {
  render() {
    return (<div className={css.Filter}>
              <h1> Filter Presentational React Component </h1>
            </div>);
  }
}

Filter.propTypes = propTypes;
export default Filter;
