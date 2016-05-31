import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {renderDevTools} from './utils/devTools';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <div>
    {/* <App /> is your app entry point */}
    <Provider store={store}>
      <App/>
    </Provider>}

  </div>,
  document.getElementById('main')
);
