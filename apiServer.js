var path = require('path');
var webpack = require('webpack');
var express = require('express');

var dispo = require('./lib/apiAnalytics');

var app = express();

app.get('/disponibilidad/:startDate/:endDate', function (req, res) {
  dispo.getInfoAvailability(req.params.startDate, req.params.endDate)
    .then( data => {
      res.send(data);
    });
});

app.listen(4000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:4000');
});
