import React, { Component, PropTypes } from 'react';

import css from './index.scss';

//import components
import TableRow from '../TableRow';

const propTypes = {};

class TableBody extends Component {
    render() {
        return (
            <tbody className="TableBody">
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            </tbody>
        );
    }
}

TableBody.propTypes = propTypes;
export default TableBody;
