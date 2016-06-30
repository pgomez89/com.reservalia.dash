import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
};

class ErrorBox extends Component {
  render() {
    return (<div className={css.ErrorBox}>
              <h1> ErrorBox Presentational React Component </h1>
            </div>);
  }
}

ErrorBox.propTypes = propTypes;
export default ErrorBox;
