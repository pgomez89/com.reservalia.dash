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
    // getTotalSales: () => get("http://hotelmanager.reservalia.com:2020/sales/totalSales?lastModified=0")
    getTotalSales: function(){
        return new Promise(function(resolve,reject){
            resolve(10);
        });
    }
}

