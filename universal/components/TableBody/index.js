import React, { Component, PropTypes } from 'react';

import css from './index.scss';

//import components
import TableRow from '../TableRow';

const propTypes = {};

/**
 * TableBody recibe como props el array de objetos que recibe Table.
 */

class TableBody extends Component {
    render() {
        var {data} = this.props;
        var rows = [];
        for (let i = 0; i < data.length; i++) {
            rows.push(<TableRow key={i+'-'+i} info={data[i]}/>)
        }
        return (
            <tbody className="TableBody">
             {rows}
            </tbody>
        );
    }
}

TableBody.propTypes = propTypes;
export default TableBody;