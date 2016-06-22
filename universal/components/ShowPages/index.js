import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {};

class ShowPages extends Component {
    render() {
        return (
            <div className="ShowPages">
                <div className="show-pages">
                    <form className="form-inline">
                        <div className="form-group">
                            <label className="label-margin">Show: </label>
                            <input className="form-control" type="text"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

ShowPages.propTypes = propTypes;
export default ShowPages;
