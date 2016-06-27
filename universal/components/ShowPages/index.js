import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
    selectCantRows : React.PropTypes.func
};

class ShowPages extends Component {
    render() {
        return (
            <div className="ShowPages">
                <div className="show-pages">
                    <form className="form-inline">
                        <div className="form-group">
                            <label className="label-margin">Show: </label>
                            <select className="form-control" onChange={this.props.selectCantRows}>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <label> rows</label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

ShowPages.propTypes = propTypes;
export default ShowPages;
