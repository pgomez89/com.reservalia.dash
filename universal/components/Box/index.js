import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
};

class Box extends Component {
  render() {
    return (<div className={css.Box}>
              <h1> {this.props.title} </h1>
            </div>);
  }
}

Box.propTypes = propTypes;
export default Box;
