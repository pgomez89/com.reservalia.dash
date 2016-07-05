import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
    info: React.PropTypes.object
};

/**
 *TableRow recibe como props un array.
 */

class TableRow extends Component {
    render() {
        const {info} = this.props;
        const keys = Object.keys(info);
        let elemRows = [];
        for(let i=0;i<keys.length;i++){
            elemRows.push(<td key={info[keys[i]]+'-'+i}>{info[keys[i]]}</td>)
        }

        return (
            <tr className="TableRow">
                {elemRows}
            </tr>
        );
    }
}

TableRow.propTypes = propTypes;
export default TableRow;
