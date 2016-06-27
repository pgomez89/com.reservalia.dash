import React, { Component, PropTypes } from 'react';

import css from './index.scss';

const propTypes = {
    clickNumberPage: React.PropTypes.func,
    clickPreviousPage: React.PropTypes.func,
    clickNextPage: React.PropTypes.func
};

/*
 * Pagination recibe un array de numeros con la cantidad de paginas
 **/

class Pagination extends Component {
    render() {
        var pages = [];
        for (let i = 1; i <= this.props.pages; i++) {
            if (i == this.props.actualPage) {
                pages.push(<li className="activePage" key={'page-'+i}><a value={i}
                                                                         onClick={this.props.clickNumberPage}>{i}</a>
                </li>)
            } else {
                pages.push(<li key={'page-'+i}><a value={i} onClick={this.props.clickNumberPage}>{i}</a></li>)
            }
        }
        return (
            <nav>
                <ul className="pagination">
                    <li>
                        <a onClick={this.props.clickPreviousPage}>
                            <span>&laquo;</span>
                        </a>
                    </li>
                    {pages}
                    <li>
                        <a onClick={this.props.clickNextPage}>
                            <span>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

Pagination.propTypes = propTypes;
export default Pagination;
