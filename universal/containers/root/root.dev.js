import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import './index.scss';

//import components
import MonitorApp from '../MonitorApp';
import DevTools from '../devTools';

class Root extends Component {
    render() {
        const { store, routing, history } = this.props;

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

export default Root;