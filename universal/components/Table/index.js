import React, { Component, PropTypes } from 'react';

import css from './index.scss';

//import components
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import ErrorBox from '../ErrorBox';

const propTypes = {
    sortRows: React.PropTypes.func
};

/**
 * El componente Table recibe como props un array de objetos. Necesita que una de las key del objeto sea 'id'.
 */

class Table extends Component {
    render() {
        var error = [];
        if (this.props.isErrorFilter) {
            error.push(<ErrorBox key="errorFilter" />);
        }
        return (
            <div className="Table">
                <table id="table_id" className="table table-striped table-hover table-bordered">
                    <TableHeader header={this.props.headers} sort={this.props.sort}
                                 values={Object.keys(this.props.data[0])} sortRows={this.props.sortRows}/>
                    <TableBody data={this.props.data}/>
                </table>
                {error}
            </div>
        );
    }
}

Table.propTypes = propTypes;
export default Table;
