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
    getTotalSales: () => get("/sales/totalSales?lastModified=0")
}

