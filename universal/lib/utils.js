import fetch from 'isomorphic-fetch';

export const getDataJson = url => {
    return fetch(url).then(response => {
        if (response.ok) return response.json();
        throw {
            status: response.status,
            text: response.statusText
        }
    });
};

export const getFilterDataAvailability = (data, filterText) => {
    if (filterText) {
        var dataFilter = data.filter(obj => obj.id.toString().includes(filterText) || obj.host.includes(filterText) ? true : false);
        return dataFilter.length ? dataFilter : false;
    } else {
        return data;
    }
};

export const getPaginationData = (data, actualPage, itemsPerPage) => data.slice(itemsPerPage * (actualPage - 1), itemsPerPage + (itemsPerPage * (actualPage - 1)));

export const getVisibleData = (data, filterText, actualPage, itemsPerPage) => {
    let result = getFilterDataAvailability(data, filterText);
    result = getPaginationData(result, actualPage, itemsPerPage);

    return result;
};

export const getCantPages = (cantRows, itemsPerPage) => Math.ceil(cantRows / itemsPerPage);

export const calPercentage = (numerator, nominator) => Math.round((numerator / nominator) * 100);

export const getDataSort = (data, order, colSort) => {
    if (typeof data[0][colSort] == 'string') {
        if (order == 'desc') {
            return data.sort(function (a, b) {
                if (a[colSort] > b[colSort]) return -1;
                if (a[colSort] < b[colSort]) return 1;
                return 0;
            });
        } else {
            return data.sort(function (a, b) {
                if (a[colSort] < b[colSort]) return -1;
                if (a[colSort] > b[colSort]) return 1;
                return 0;
            });
        }
    } else {
        if (order == 'desc') {
            return data.sort((a, b) => b[colSort] - a[colSort]);
        } else {
            return data.sort((a, b) => a[colSort] - b[colSort]);
        }
    }
};