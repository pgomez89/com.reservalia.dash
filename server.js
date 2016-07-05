import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';
import expressLayouts  from 'express-ejs-layouts';
import http from 'http';
import config from 'config';

var dispo = require('./apiAnalytics');

import * as uni from './server/app.js';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var development = (process.env.NODE_ENV === 'development');

var defaultLayout = development ? 'layout.dev.ejs' : 'layout.prod.ejs';
const app = express();
const httpServer = http.createServer(app);
let expressPort = config.get('express.port');


if( development ){
    var portfinder = require('portfinder');
    portfinder.basePort = 3000;
    portfinder.getPort(function (err, port) {
        if( err ){ 
            console.log( 'Get port fail: ', err, err.stack);
        }
        expressPort = port;
    });
}

app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'ejs');
app.set('layout', defaultLayout); // defaults to 'layout'

app.use(expressLayouts);

/**
 * Server middleware
 */
app.use(require('serve-static')(path.join(__dirname, config.get('buildDirectory'))));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/**
 * API Endpoints
 */

app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'images', 'favicon.ico')));
app.get('/loading.gif', (req, res) => res.sendFile(path.join(__dirname, 'images', 'loading.gif')));

/**
 * Universal Application endpoint
 */
app.get('/', uni.handleRender);
app.get('/availability', uni.handleRender);

app.get('/availability/:startDate/:endDate', function (req, res) {
    dispo.getInfoAvailability(req.params.startDate, req.params.endDate)
        .then(data => {
            res.send(data);
        });
});

httpServer.listen(expressPort, function () {
  console.log('Example app listening on port %s', expressPort);
});


module.exports = {
  expressPort: expressPort
};
