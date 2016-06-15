import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import routes from '../universal/routes';

import Root from '../universal/containers/root';


ReactDOM.render(<Root routing={routes} history={browserHistory}/>, document.getElementById('app'));
