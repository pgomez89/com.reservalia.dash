import React, { Component, PropTypes } from 'react';

import css from './index.scss';

//import components
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

const propTypes = {};

class Table extends Component {
    render() {
        return (
            <div className="Table">
                <table id="table_id" className="table table-striped table-hover table-bordered">
                    <TableHeader />
                    <TableBody />
                </table>
            </div>
        );
    }
}

Table.propTypes = propTypes;
export default Table;
