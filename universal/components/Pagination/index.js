import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
    clickNumberPage: React.PropTypes.func
};

/*
* Pagination recibe un array de numeros con la cantidad de paginas
**/

class Pagination extends Component {
  render() {
      var pages = [];
      for(var i= 1; i<=this.props.pages;i++){
          pages.push(<li key={'page-'+i}><a value={i} onClick={this.props.clickNumberPage}>{i}</a></li>)
      }
    return (
        <nav>
            <ul className="pagination">
                <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pages}
                <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
  }
}

Pagination.propTypes = propTypes;
export default Pagination;
