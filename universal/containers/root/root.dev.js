import React, { Component } from 'react';
import { Router } from 'react-router';
import './index.scss';

//import components
import MonitorApp from '../MonitorApp';

class Root extends Component {
    render() {
        const { routing, history } = this.props;

        return (
            <div>
                <Router history={history}>
                    {routing}
                </Router>
            </div>
        )
    }
}

export default Root;