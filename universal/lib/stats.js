"use strict";

import fetch from 'isomorphic-fetch';

const get = url => {
    return fetch(url).then(response => {
        if (response.ok) return response;
        throw {
            status: response.status,
            text: response.statusText
        }
    });
};

export default {
    getTotalSales: function(){
        return new Promise(function(resolve,reject){
            resolve(10);
        });
    },

    getSalesOK: function(){
        return new Promise(function(resolve,reject){
            resolve({"oneShot":20,"extraSteps":0});
        });
    },

    getSalesWithBookingStatus: function(){
        return new Promise(function(resolve,reject){
            resolve([{"_id":"NEW_CREDIT_CARD","count":2}]);
        });
    },

    getTotalErrors: function(){
        return new Promise(function(resolve, reject){
            resolve(3);
        })
    },

    getUnknownErrors: function(){
        return new Promise(function(resolve, reject){
            resolve(1);
        })
    },

    getErrorsWithBookingStatus: function(){
        return new Promise(function(resolve,reject){
            resolve([{"_id":"CREDIT_CARD_ERROR","count":2}]);
        });
    },

    getTotalAttemps: function(){
        return new Promise(function(resolve,reject){
            resolve(14);
        });
    },

    getTotalTokens: function(){
        return new Promise(function(resolve,reject){
            resolve(4);
        });
    }

}

