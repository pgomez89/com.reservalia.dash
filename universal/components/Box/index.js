import React, {Component, PropTypes} from 'react';

import css from './index.scss';

const propTypes = {};

class Box extends Component {
    render() {
        return (<div className="Box">
            <h2 className="value">{this.props.value}</h2>
            <h1 className="title">{this.props.title}</h1>
            <p className="change-rate">
                <i className="arrow">-</i><span className="difference">27%</span>
            </p>
            <p className="updated-at" >Last updated at 22:15</p>
        </div>);
    }
}

Box.propTypes = propTypes;
export default Box;
