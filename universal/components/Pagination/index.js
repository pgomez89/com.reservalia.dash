import React, { Component, PropTypes } from 'react';

//import styles
import css from './index.scss';

const propTypes = {
    clickNumberPage: React.PropTypes.func,
    clickPreviousPage: React.PropTypes.func,
    clickNextPage: React.PropTypes.func,
    pages: React.PropTypes.number,
    actualPage: React.PropTypes.number
};

class Pagination extends Component {
    render() {
        const {pages, actualPage, clickNumberPage, clickPreviousPage, clickNextPage} = this.props;
        let btnPages = [];

        for (let i = 1; i <= pages; i++) {
            if (i == actualPage) {
                btnPages.push(<li className="activePage" key={'page-'+i}><a value={i} onClick={clickNumberPage}>{i}</a>
                </li>)
            } else {
                btnPages.push(<li key={'page-'+i}><a value={i} onClick={clickNumberPage}>{i}</a></li>)
            }
        }

        return (
            <nav>
                <ul className="Pagination">
                    <li>
                        <a onClick={clickPreviousPage}>
                            <span>&laquo;</span>
                        </a>
                    </li>
                    {btnPages}
                    <li>
                        <a onClick={clickNextPage}>
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
