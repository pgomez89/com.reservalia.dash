import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {};

class ErrorBox extends Component {
    render() {
        return (
            <div className="ErrorBox">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error center-block">
                            <h2 className="text-center">Ups!</h2>
                            <p className="text-center">No matching records found </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ErrorBox.propTypes = propTypes;
export default ErrorBox;
