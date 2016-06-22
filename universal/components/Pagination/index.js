import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
};

/*
* Pagination recibe un array de numeros con la cantidad de paginas
**/

class Pagination extends Component {
  render() {
    return (
        <nav>
            <ul className="pagination">
                <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
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
