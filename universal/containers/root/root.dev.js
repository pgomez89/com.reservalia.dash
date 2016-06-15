import React, { Component } from 'react';
import { Router } from 'react-router';
import './index.scss';

//import components
import MonitorApp from '../MonitorApp';

import DevTools from '../devTools';

class Root extends Component {
    render() {
        const { routing, history } = this.props;

        return (
            <div>
                <Router history={history}>
                    {routing}
                </Router>
                <DevTools />
            </div>
        )
    }
}

export default Root;