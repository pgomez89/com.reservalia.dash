import React, { Component, PropTypes } from 'react';

const propTypes = {
};

class <%= pascalEntityName %> extends Component {
  render() {
    return (<div> <h1> <%= pascalEntityName %> Presentational React Component </h1></div>);
  }
}

<%= pascalEntityName %>.propTypes = propTypes;
export default <%= pascalEntityName %>;
