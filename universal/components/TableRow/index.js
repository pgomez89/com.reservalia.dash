import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
};

class TableRow extends Component {
  render() {
    return (
        <tr className="TableRow">
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
        </tr>
    );
  }
}

TableRow.propTypes = propTypes;
export default TableRow;
