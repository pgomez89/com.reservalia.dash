import React, { Component, PropTypes } from 'react';

//import styles
import css from './index.scss';

//import components
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import ErrorBox from '../ErrorBox';

const propTypes = {
    sortRows: React.PropTypes.func,
    data: React.PropTypes.array,
    headers: React.PropTypes.array,
    sort: React.PropTypes.object,
    isErrorFilter: React.PropTypes.bool
};

/**
 * Una de las key del objeto debe ser 'id'.
 */

class Table extends Component {
    render() {
        const { headers, sort, data, sortRows, isErrorFilter } = this.props;
        let error = [];

        if (isErrorFilter) error.push(<ErrorBox key="errorFilter"/>);

        return (
            <div className="Table">
                <table id="table_id" className="table table-striped table-hover table-bordered">
                    <TableHeader header={headers} sort={sort} values={Object.keys(data[0])} sortRows={sortRows}/>
                    <TableBody data={data}/>
                </table>
                { error }
            </div>
        );
    }
}

Table.propTypes = propTypes;
export default Table;
