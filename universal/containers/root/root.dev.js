import React, { Component } from 'react';
import './index.scss';

//import components
import NavBar from '../../components/NavBar';
import Table from '../../components/Table';
import SearchBoxDate from '../../components/SearchBoxDate';

import DevTools from '../devTools';

class Root extends Component {
    render() {
        return (
            <div id="wrapper">
                <NavBar />
                <div id="page-wrapper">
                    <SearchBoxDate />
                    <Table />
                </div>
            </div>
        )
    }
}

export default Root;