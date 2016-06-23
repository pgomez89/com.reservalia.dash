import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {};

/**
 * TableHeader recibe un array con todas las keys.
 */

class TableHeader extends Component {
    render() {
        return (
            <thead className="TableHeader">
            <tr>
                {
                    this.props.header.map(title => <th key={title}>{title
                            .replace(/([A-Z])/g, ' $1')
                            .replace(/^./, function (str) {
                                    return str.toUpperCase();
                                }
                            )}</th>)
                }
            </tr>
            </thead>
        );
    }
}

TableHeader.propTypes = propTypes;
export default TableHeader;
