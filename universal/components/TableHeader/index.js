import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
    sortRows:React.PropTypes.func
};

/**
 * TableHeader recibe un array con todas las keys.
 */

class TableHeader extends Component {
    render() {
        var {header, values} = this.props;
        var listHeaders = [];

        for (let i = 0; i < header.length; i++){
            listHeaders.push(<th key={i} onClick={this.props.sortRows} value={values[i]}>{header[i]}</th>);
        }
        return (
            <thead className="TableHeader">
            <tr>
                { listHeaders }
            </tr>
            </thead>
        );
    }
}

TableHeader.propTypes = propTypes;
export default TableHeader;
