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
var serverPort = '3000';
var serverHost = '0.0.0.0';

var mongoUrl = "mongodb://mongo.aws/specialdom";

var isProdEnv = process.env.NODE_ENV !== 'development';

var isRcEnv = process.env.NODE_ENV !== 'rc';

if( isProdEnv ){
  mongoUrl = "mongodb://reservalia-db-00:27017/specialdom,reservalia-db-01:27017/specialdom,reservalia-db-02:27017/specialdom"

  config = require('./webpack.production');
  isDevelopment = false;
  indexPath= '/dist/';

  serverPort = '9290';
}

if ( isRcEnv ){
  mongoUrl = "mongodb://reservalia-db-00.servers.despegar.it, reservalia-db-01.servers.despegar.it, reservalia-db-02.servers.despegar.it";
}
var compiler = webpack(config);

// Setup server
var app = express();
app.use(cookieParser());
app.use(session({
  store: new MongoStore({
    url: mongoUrl,
    autoRemove: 'interval',
    autoRemoveInterval: 10
  }),
  secret: "s3cr3t",
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

app.listen(serverPort, serverHost, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log( 'NODE_ENV: ', process.env.NODE_ENV );
  console.log( 'Listening at ', serverHost,':', serverPort );
});
