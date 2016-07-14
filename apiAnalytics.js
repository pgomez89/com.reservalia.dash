"use strict";
var key = require('./Reservalia-6ff18fd0062f.json');
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
                "metrics": "ga:uniqueEvents",
                "filters": "ga:eventCategory==Disponibilidad;ga:eventAction==Sin-Disponibilidad",
                "sort": "-ga:uniqueEvents"
            },
            availability: {
                auth: jwtClient,
                ids: "ga:101516000",
                dimensions: "ga:hostname",
                "start-date": startDate,
                "end-date": endDate,
                "metrics": "ga:uniqueEvents",
                "filters": "ga:eventCategory==Searchbox;ga:eventAction==Search",
                "sort": "-ga:uniqueEvents"
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
            var obj = {id: parseInt(elem[0]), host: elem[1], sinDisponibilidad: parseInt(elem[2])};
            arrayComplete.push(obj)
        });

        arrayB.map((elem)=> {
            for (let i = 0; i < arrayComplete.length; i++) {
                if (elem[0] == arrayComplete[i].host) {
                    arrayComplete[i].total = parseInt(elem[1]);
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
        ]).then(values => (this.generateResDispo(values[0].rows, values[1].rows)))
    }
};