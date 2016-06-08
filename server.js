

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var enviroment;


function startServer(){

      //rutas
    var routes = require('./routes/routes');

    //webpack
    var webpack = require('webpack');

    var isDevelopment = true;
    var indexPath = '';
    var mongoHost = "mongo.aws";
    var serverPort = '3010';
    var serverHost = '0.0.0.0';

    var mongoUrl = "mongodb://mongo.aws/specialdom";

    var isDevelopmentEnv = enviroment === 'development';
    var isRcEnv = enviroment === 'rc';
    var isProdEnv = enviroment === 'prod';
    var config = isDevelopmentEnv ? require('./webpack.config') : require('./webpack.production');

    if( isProdEnv ){
      mongoUrl = "mongodb://reservalia-db-00:27017,reservalia-db-01:27017,reservalia-db-02:27017/specialdom"
      mongoUrl = "mongodb://mongo.aws/specialdom";
      isDevelopment = false;
      indexPath= '/dist/';
      serverPort = '9290';
    }

    if ( isRcEnv ){
      mongoUrl = "mongodb://reservalia-db-00.servers.despegar.it, reservalia-db-01.servers.despegar.it, reservalia-db-02.servers.despegar.it/specialdom";
      isDevelopment = false;
      indexPath= '/dist/';
      serverPort = '9290';
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


    if( isDevelopment ){
      app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        historyApiFallback: true
      }));

       app.use(require('webpack-hot-middleware')(compiler));
    }else{
      app.use('/dist', express.static(__dirname + '/dist'));
    }


    app.get('/', function (req, res) {
      if (req.session && req.session.user) {
        res.render(path.join(__dirname, 'index'), { staticPath: config.output.publicPath });
      } else {
        res.redirect('/login');
      }
    });



    app.use('/', routes);

    app.listen(serverPort, serverHost, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log( 'NODE_ENV: ', enviroment );
      console.log( 'Listening at ', serverHost,':', serverPort );
    });

}



if( !process.env.NODE_ENV ){
  var fs = require('fs');
  fs.readFile('/etc/cluster.context', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    enviroment = data;
    startServer();
  });
}else{
  enviroment = 'prod' || process.env.NODE_ENV;
  startServer();
}

