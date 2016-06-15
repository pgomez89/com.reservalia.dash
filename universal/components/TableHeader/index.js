import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {};

class TableHeader extends Component {
    render() {
        return (
            <thead className="TableHeader">
            <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
            </tr>
            </thead>
        );
    }
}

TableHeader.propTypes = propTypes;
export default TableHeader;
