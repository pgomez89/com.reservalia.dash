"use strict";
var key = require('./Reservalia-6ff18fd0062f.json');
var google = require("googleapis");
var analytics = google.analytics('v3');

var scopes = [
  'https://www.googleapis.com/auth/analytics'
];

var jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, scopes, null);

//YYYY-MM-DD
var paramA = {
  auth: jwtClient,
  ids: "ga:101516000",
  dimensions: "ga:eventLabel,ga:hostname",
  "start-date": "2016-04-01",
  "end-date": "yesterday",
  "metrics": "ga:uniqueEvents",
  "filters": "ga:eventCategory==Disponibilidad;ga:eventAction==Sin-Disponibilidad",
  "sort": "-ga:uniqueEvents"
};

var paramB = {
  auth: jwtClient,
  ids: "ga:101516000",
  dimensions: "ga:hostname",
  "start-date": "2016-04-01",
  "end-date": "yesterday",
  "metrics": "ga:uniqueEvents",
  "filters": "ga:eventCategory==Searchbox;ga:eventAction==Search",
  "sort": "-ga:uniqueEvents"
};

const getDataAnalytics = (params) => {
  return new Promise((resolve, reject) => {
    analytics.data.ga.get(params, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const generateResDispo = (arrayA, arrayB) => {
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
};

const getDispo = () => {
  Promise.all([
    getDataAnalytics({
      auth: jwtClient,
      ids: "ga:101516000",
      dimensions: "ga:eventLabel,ga:hostname",
      "start-date": "2016-04-01",
      "end-date": "yesterday",
      "metrics": "ga:uniqueEvents",
      "filters": "ga:eventCategory==Disponibilidad;ga:eventAction==Sin-Disponibilidad",
      "sort": "-ga:uniqueEvents"
    }),
    getDataAnalytics({
      auth: jwtClient,
      ids: "ga:101516000",
      dimensions: "ga:hostname",
      "start-date": "2016-04-01",
      "end-date": "yesterday",
      "metrics": "ga:uniqueEvents",
      "filters": "ga:eventCategory==Searchbox;ga:eventAction==Search",
      "sort": "-ga:uniqueEvents"
    })
  ]).then( values =>  {
    var resultado = generateResDispo(values[0].rows, values[1].rows);
    console.log(resultado);
    return resultado;
  });
};

exports.getDispo = getDispo;


