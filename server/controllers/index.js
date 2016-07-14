const dispo  = require( '../../apiAnalytics' );

/**
 * GET /
 * Home page.
 */
exports.indexController = (req, res) => {
    console.log( "IndexController for route: ", req.url );
  res.render('index', {
    title: 'Monitor'
  });
};

/**
 * GET /
 * Availability page.
 */
exports.availabilityController = (req, res) => {
    dispo.getInfoAvailability(req.params.startDate, req.params.endDate)
        .then(data => { res.send(data); });
};

