/**
 * Module dependencies.
 */

import path from 'path';

import bodyParser from 'body-parser';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import http from 'http';
import config from 'config';

import staticFiles  from 'serve-static';

/**
 * Controllers (route handlers).
 */
import { indexController, availabilityController } from './controllers';

const app = express();
let expressPort = config.get('express.port');

const isDevelopment = process.env.NODE_ENV !== 'development';

// set locals to use in views *.ejs
app.locals.includeProductionCss = isDevelopment;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layout.ejs');

app.use(expressLayouts);

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


/**
 * Application endpoints
 */
app.get('/', indexController );
app.get('/availability', indexController );



/**
 * API Endpoints
 */

app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, './public/images', 'favicon.ico')));
app.get('/loading.gif', (req, res) => res.sendFile(path.join(__dirname, './public/images', 'loading.gif')));

app.get('/availability/:startDate/:endDate', availabilityController );


app.listen(expressPort, function () {
  console.log('Monitor express app listening on port %s', expressPort);
});
