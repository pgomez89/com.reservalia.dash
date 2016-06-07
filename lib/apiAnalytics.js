"use strict";
var key = require('../key/Reservalia-6ff18fd0062f.json');
var google = require("googleapis");
var analytics = google.analytics('v3');

var scopes = [
  'https://www.googleapis.com/auth/analytics'
];

var jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, scopes, null);

module.exports = {
  constructorParamsSearch: function (startDate, endDate) {
    var params = {
      unavailable: {
        auth: jwtClient,
        ids: "ga:101516000",
        dimensions: "ga:eventLabel,ga:hostname",
        "start-date": startDate,
        "end-date": endDate,
        "metrics": "ga:sessionsWithEvent",
        "filters": "ga:eventCategory==Disponibilidad;ga:eventAction==Sin-Disponibilidad",
        "sort": "-ga:sessionsWithEvent"
      },
      availability: {
        auth: jwtClient,
        ids: "ga:101516000",
        dimensions: "ga:hostname",
        "start-date": startDate,
        "end-date": endDate,
        "metrics": "ga:sessionsWithEvent",
        "filters": "ga:eventCategory==Searchbox;ga:eventAction==Search",
        "sort": "-ga:sessionsWithEvent"
      }
    };

    return params;
  },
  getDataAnalytics: function (params) {
    return new Promise((resolve, reject) => {
      analytics.data.ga.get(params, (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  },
  generateResDispo: function (arrayA, arrayB) {
    var arrayComplete = [];

    arrayA.map((elem)=> {
      var obj = {id: elem[0], host: elem[1], sinDisponibilidad: elem[2]};
      arrayComplete.push(obj)
    });

    arrayB.map((elem)=> {
      for (let i = 0; i < arrayComplete.length; i++) {
        if (elem[0] == arrayComplete[i].host) {
          arrayComplete[i].total = elem[1];
        }
      }
    });

    return arrayComplete;
  },
  getInfoAvailability: function (starDate, endDate) {
    var params = this.constructorParamsSearch(starDate, endDate);
    return Promise.all([
      this.getDataAnalytics(params.unavailable),
      this.getDataAnalytics(params.availability)
    ]).then(values => this.generateResDispo(values[0].rows, values[1].rows))
  }
};
