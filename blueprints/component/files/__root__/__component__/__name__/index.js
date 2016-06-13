import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
};

class <%= pascalEntityName %> extends Component {
  render() {
    return (<div className={css.<%= pascalEntityName %>}>
              <h1> <%= pascalEntityName %> Presentational React Component </h1>
            </div>);
  }
}

<%= pascalEntityName %>.propTypes = propTypes;
export default <%= pascalEntityName %>;
