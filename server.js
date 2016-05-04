var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var dispo = require('./apianalytics');
var bodyParser = require('body-parser');

var app = express();
var compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/dispo/:inicio/:fin',function(req,res) {
  console.log(req.params.inicio);
  console.log(req.params.fin);
  res.send("hola");
});

app.use('/dispo',function(req,res) {
  res.json([
    {
      host:"www.hotel.com.ar",
      id:23435,
      total: 945,
      sinDisponibilidad: 654
    },
    {
      host:"www.hotel.com.ar",
      id:23435,
      total: 945,
      sinDisponibilidad: 654
    },
    {
      host:"www.hotel.com.ar",
      id:23435,
      total: 925,
      sinDisponibilidad: 654
    }
  ]);
});


app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
