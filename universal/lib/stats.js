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
    }
}

