/**
 * Module dependencies.
 */

import path from 'path';

import bodyParser from 'body-parser';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import http from 'http';
import config from 'config';
import cookieParser  from 'cookie-parser';
import session  from 'express-session';
import staticFiles  from 'serve-static';

const app = express();
const expressPort = process.env.PORT || config.get('express.port');
const MongoStore = require('connect-mongo')(session);
const routes = require('./routes');
const isDevelopment = process.env.NODE_ENV !== 'development';

// set locals to use in views *.ejs
app.locals.includeProductionCss = isDevelopment;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layout.ejs');
app.set('mongoUrl', config.get('mongo.url'));

app.use(expressLayouts);

app.use(cookieParser());

app.use(session({
  store: new MongoStore({
    url: config.get('mongo.url'),
    autoRemove: 'interval',
    autoRemoveInterval: 10
  }),
  secret: 's3cr3t',
  resave: false,
  saveUninitialized: true
}));

app.use(staticFiles(
      path.join(__dirname,'..', config.get('buildDirectory')),
      {
        dotfile: 'ignore',
        etag: true,
        index: false,
        lastModified: true
      }
  ));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', routes);


app.listen(expressPort, function () {
  console.log('Monitor express app listening on port %s', expressPort);
});
