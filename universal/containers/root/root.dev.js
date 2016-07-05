import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routing from '../../routes.js';
import store from '../../store';
import './index.scss';

//import components

import MonitorApp from '../MonitorApp';
import DevTools from '../devTools';

const history = syncHistoryWithStore(browserHistory, store);

 
class RootContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router history={history}>
                        {routing}
                    </Router>
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default RootContainer;
