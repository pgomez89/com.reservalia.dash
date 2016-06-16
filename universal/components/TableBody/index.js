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
        return (
            <tbody className="TableBody">
            {
                this.props.data.map((elem) => {
                    let keys = Object.keys(elem);
                    let info = [];
                    for (var i = 0; i < keys.length; i++) {
                        info.push(elem[keys[i]]);
                    }
                    return <TableRow key={elem.id} info={info}/>
                })
            }
            </tbody>
        );
    }
}

TableBody.propTypes = propTypes;
export default TableBody;