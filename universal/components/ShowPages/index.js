import React, { Component, PropTypes } from 'react';

//import styles
import css from './index.scss';

const propTypes = {
    selectCantRows: React.PropTypes.func
};

class ShowPages extends Component {
    render() {
        const {selectCantRows} = this.props;
        return (
            <div className="ShowPages">
                <form className="form-inline">
                    <label className="label-margin">Show rows: </label>
                    <select className="form-control" onChange={selectCantRows}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </form>
            </div>
        );
    }
}

ShowPages.propTypes = propTypes;
export default ShowPages;
