var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var dispo = require('./lib/apiAnalytics');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/disponibilidad', function (req, res) {
  dispo.getInfoAvailability("2016-04-01", "2016-04-02", function(respuesta){
    console.log(respuesta);
    res.send(respuesta);
  });
});

app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
