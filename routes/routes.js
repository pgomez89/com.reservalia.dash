var express = require('express');
var path = require('path');
var mongodb = require('mongojs')("mongodb://mongo.aws/specialdom", ["users"]);
var util = require('../lib/util');
var dispo = require('../lib/apiAnalytics');

var router = express.Router();

//LOGIN

router.get('/login', function (req, res) {
  console.log("info:: ", req.app.get('staticPath'))
  if (req.session && req.session.user) {
    res.redirect('/');
  } else {
    res.render('login', {staticPath: req.app.get('staticPath')});
  }
});

router.get('/logout', function (req, res) {
  delete req.session.user;
  res.redirect('/');
});

router.post('/auth', function (req, res) {
  var user = req.body;

  if (user.username === 'admin' && ( user.password === '1230' || user.password === 'Dsaewq321#21' ) ) {
    user._id = user.username;
    user.isAdmin = true;
    req.session.user = user;
    res.redirect('/');
  } else {
    user.password = util.encrypt(user.password);
    mongodb.users.findOne({_id: user.username, password: user.password}, function (err, user) {
      if (err) {
        res.redirect('/login');
      } else {
        if (user === null) {
          res.redirect('/login');
        } else {
          req.session.user = user;
          res.redirect('/');
        }
      }
    });
  }
});

//API ANALYTICS

router.get('/disponibilidad/:startDate/:endDate', function (req, res) {
  dispo.getInfoAvailability(req.params.startDate, req.params.endDate)
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
