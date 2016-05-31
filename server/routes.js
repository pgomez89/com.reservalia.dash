var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {

});

router.get('/login', function (req, res) {
  var opts = {
    layout:false
  };

  if(req.session && req.session.user){
    res.redirect('/');
  }else{
    res.render('login');
  }
});

router.get('/logout', function (req, res) {

});

router.post('/auth', function (req, res) {
  var user = req.body;

  /**
   * Se usa el hardcode si el user es admin
   */
  if (user.username === 'admin' && user.password === 'Dsaewq321#21'){

    res.send(user.username+user.password);
  }
});

router.get('/register', function (req, res) {

});

router.post('/registerUser', function (req, res) {

});

module.exports = router;
