import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import routing from '../../routes.js';

import './index.scss';

class RootContainer extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    {routing}
                </Router>
            </div>
        );
    }
}

export default RootContainer;
