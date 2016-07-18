const dispo  = require( '../../apiAnalytics' );
const mongodb = require('mongojs');
const util = require('../commons/util');


/**
 * GET /
 * Home page.
 */
exports.indexController = (req, res) => {
    console.log( 'IndexController for route:', req.url );
    if (req.session && req.session.user) {
      console.log("User loguedo")
      res.render('index', { title: 'Monitor', isReactApp: true });
    } else {
      res.redirect('/login');
    }

};

/**
* GET /login
* Login page
*/

exports.loginController =  (req, res) => {
  if (req.session && req.session.user) {
    res.redirect('/');
  } else {
    res.render('login');
  }
};

/**
* POST /auth
*/

exports.authController =  (req, res) => {
  var user = req.body;

  if (user.username === 'admin' && ( user.password === '1230' || user.password === 'Dsaewq321#21' ) ) {
    user._id = user.username;
    user.isAdmin = true;
    req.session.user = user;
    res.redirect('/');
  } else {
    user.password = util.encrypt(user.password);
    mongodb( req.app.get('mongoUrl'), ['users'])
      .users.findOne({_id: user.username, password: user.password}, function (err, user) {
      if (err) {
        res.redirect('/login');
        console.log(' Db error: ', err, err.stack );
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
};

/*
* 
* 
*/
exports.logoutController = (req, res) => {
  delete req.session.user;
  res.redirect('/');
};

/**
 * GET /
 * Availability page.
 */
exports.availabilityController = (req, res) => {
    dispo.getInfoAvailability(req.params.startDate, req.params.endDate)
        .then(data => { res.send(data); });
};

