import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {};

/**
*TableRow recibe como props un array.
*/

class TableRow extends Component {
  render() {
    return (
      <tr className="TableRow">
        {
          this.props.info.map(item => <td key={item}>{item}</td>)
        }
      </tr>
    );
  }
}

TableRow.propTypes = propTypes;
export default TableRow;
