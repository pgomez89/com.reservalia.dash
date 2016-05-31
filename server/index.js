/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// In Express, this lets you call newrelic from within a template.

var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');


// Setup server
var app = express();
var server = require('http').createServer(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

// http://gsferreira.com/archive/2014/12/overcome-the-depth_zero_self_signed_cert-on-nodejs/
if ('development' == app.get('env')) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

app.use('/', routes);

// ON UNCAUGHT EXCEPTION, DO SOMETHING
var LOGGER = console;
process.on(
  'uncaughtException',
  function (err) {
    LOGGER.error(err.stack);
    process.exit(1);
  }
);

// Start server
server.listen(process.env.PORT || 9290, function () {
  LOGGER.info('Express server listening on port 9290');
});
