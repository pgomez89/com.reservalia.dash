import React from 'react';
import { Route, IndexRoute } from 'react-router';


// See https://github.com/reactjs/react-router/tree/master/docs

import MonitorApp from './containers/MonitorApp';
import Dashboard from './containers/Dashboard';
import AvailabilityBox from './containers/AvailabilityBox';

export default (
  <Route path='/' component={MonitorApp}>
    <IndexRoute components={{dashboard:Dashboard}} />
    <Route path='availability' components={{availability: AvailabilityBox}} />
  </Route>
);


