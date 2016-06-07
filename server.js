var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

//rutas
var routes = require('./routes/routes');

//webpack
var webpack = require('webpack');

var config = require('./webpack.config');
var isDevelopment = true;
var indexPath = '';

var mongoHost = "mongo.aws";

var mongoUrl = 'specialdom';
if( process.env.NODE_ENV !== 'development' ){
  mongoHost = "mongodb://reservalia-db-00:27017,reservalia-db-01:27017,reservalia-db-02:27017"

  console.log( 'NODE_ENV: ', process.env.NODE_ENV )
  config = require('./webpack.production');
  isDevelopment = false;
  indexPath= '/dist/';
  mongoUrl = mongoHost+'/specialdom'
}

var compiler = webpack(config);

// Setup server
var app = express();
app.use(cookieParser());
app.use(session({
  store: new MongoStore({
    url: mongoHost+"/monitor",
    autoRemove: 'interval',
    autoRemoveInterval: 10
  }),
  secret: "anitalavalatina",
  resave: false,
  saveUninitialized: true
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.set('staticPath', config.output.publicPath);
app.set('isDevelopment', isDevelopment );


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('/', function (req, res) {
  if (req.session && req.session.user) {
    res.sendFile(path.join(__dirname,  indexPath + 'index.html'));
  } else {
    res.redirect('/login');
  }
});

app.use('/', routes);

app.listen(3020, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3020');
});
