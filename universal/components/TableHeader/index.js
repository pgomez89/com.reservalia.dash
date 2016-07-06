import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
    sortRows: React.PropTypes.func,
    header: React.PropTypes.array,
    values: React.PropTypes.array,
    sort: React.PropTypes.object
};

/**
 * TableHeader recibe un array con todas las keys.
 */

class TableHeader extends Component {
    render() {
        const {header, values, sort, sortRows} = this.props;
        let listHeaders = [];

        for (let i = 0; i < header.length; i++) {
            if (values[i] == sort.colSort) {
                if (sort.order == 'desc') {
                    listHeaders.push(<th key={i} onClick={sortRows} value={values[i]}>{header[i]}<span
                        className="arrowSort active"> ▾</span></th>);
                } else {
                    listHeaders.push(<th key={i} onClick={sortRows} value={values[i]}>{header[i]}<span
                        className="arrowSort active"> ▴</span></th>);
                }
            } else {
                listHeaders.push(<th key={i} onClick={sortRows} value={values[i]}>{header[i]}<span
                    className="arrowSort"> ▾▴</span></th>);
            }
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
