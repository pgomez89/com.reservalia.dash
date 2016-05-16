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

app.get('/disponibilidad/:startDate/:endDate', function (req, res) {
  dispo.getInfoAvailability(req.params.startDate, req.params.endDate)
    .then( data => {
      res.send(data);
    });
});

app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
