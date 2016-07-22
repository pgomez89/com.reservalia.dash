import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
    title:"Ventas"
};

class Boxes extends Component {
  render() {
    return (<div className={css.Boxes}>
              <h1>Ventas</h1>
            </div>);
  }
}

Boxes.propTypes = propTypes;
export default Boxes;
