import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {};

class Loading extends Component {
    render() {
        return (
            <div className="Loading">
                <img className="center-block" src={'/loading.gif'} alt="Loading"/>
            </div>
        );
    }
}

Loading.propTypes = propTypes;
export default Loading;
