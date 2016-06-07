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

var compiler = webpack(config);

// Setup server
var app = express();
app.use(cookieParser());
app.use(session({
  store: new MongoStore({
    url: "mongodb://mongo.aws/specialdom",
    autoRemove: 'interval',
    autoRemoveInterval: 10
  }),
  secret: "secreKey for secre Kat",
  resave: false,
  saveUninitialized: true
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('/', function (req, res) {
  if (req.session && req.session.user) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.redirect('/login');
  }
});

app.use('/', routes);

app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
