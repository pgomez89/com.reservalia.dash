import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
};

class NavBarLink extends Component {
  render() {
    return (<div className={css.NavBarLink}>
              <h1> NavBarLink Presentational React Component </h1>
            </div>);
  }
}

NavBarLink.propTypes = propTypes;
export default NavBarLink;
