import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';

import DevTools from '../universal/containers/devTools';

const isDev = (process.env.NODE_ENV !== 'production');

export function handleRender(req, res) {
    console.log(' [x] Request for', req.url);

    const devTools = (isDev) ? <DevTools /> : null;

    // Send the rendered page back to the client with the initial state
    NavBarSideBar.render('index', {isProd: (!isDev)});
}