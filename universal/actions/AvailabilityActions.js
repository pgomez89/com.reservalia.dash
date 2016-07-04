import * as types from '../constants/ActionTypes';

export const chargeFilter = (text, data, pagination) => {
    return dispatch => {
        var visibleData;
        var filterData = getFilterDataAvailability(data, text);

        if (filterData) {
            if (text) {
                visibleData = getPaginationData(filterData, pagination.actualPage, pagination.itemsPerPage);
                pagination.items = filterData.length;
                pagination.pages = getCantPages(pagination.items, pagination.itemsPerPage);
            } else {
                visibleData = getPaginationData(data, 1, pagination.itemsPerPage);
                pagination.items = data.length;
                pagination.pages = getCantPages(pagination.items, pagination.itemsPerPage);
            }

            dispatch({
                type: types.CHANGE_FILTER,
                payload: {
                    text,
                    visibleData,
                    pagination
                }
            });
        } else {
            dispatch({
                type: types.CHANGE_FILTER_ERROR,
                text
            });
        }


    };
};

export const changePageNumber = (numberPage, data, filterText, itemsPerPage) => {
    return dispatch => {
        var visibleData = getVisibleData(data, filterText, numberPage, itemsPerPage);

        dispatch({
            type: types.CHANGE_PAGE_NUMBER,
            payload: {
                numberPage,
                visibleData
            }
        })
    }
};

export const changeNextPage = (data, filterText, pagination) => {
    return dispatch => {
        var nextPage = pagination.actualPage != pagination.pages ? pagination.actualPage + 1 : pagination.actualPage;
        var visibleData = getVisibleData(data, filterText, nextPage, pagination.itemsPerPage);

        dispatch({
            type: types.CHANGE_NEXT_PAGE,
            payload: {
                visibleData,
                nextPage
            }
        });
    }
};

export const changePreviousPage = (data, filterText, pagination) => {
    return dispatch => {
        var previousPage = pagination.actualPage != 1 ? pagination.actualPage - 1 : pagination.actualPage;
        var visibleData = getVisibleData(data, filterText, previousPage, pagination.itemsPerPage);

        dispatch({
            type: types.CHANGE_PREVIOUS_PAGE,
            payload: {
                visibleData,
                previousPage
            }
        });
    }
};


export const selectShowRows = (cantRows, data, filterText, pagination) => {
    return dispatch => {
        var visibleData;

        if (filterText) {
            var filterData = getFilterDataAvailability(data, filterText);
            visibleData = getPaginationData(filterData, 1, cantRows);
            pagination.items = filterData.length;
            pagination.pages = getCantPages(pagination.items, cantRows);
        } else {
            visibleData = getPaginationData(data, 1, cantRows);
            pagination.items = data.length;
            pagination.pages = getCantPages(pagination.items, cantRows);
        }

        dispatch({
            type: types.SELECT_SHOW_ROWS,
            payload: {
                cantRows,
                visibleData,
                pagination
            }
        });
    };
};

export const sortRows = (colSort, data, filterText, sort, itemsPerPage) => {
    return dispatch => {
        if (colSort == sort.colSort) {
            sort.order = sort.order == 'desc' ? 'asc' : 'desc';
        } else {
            sort.order = 'desc';
        }

        var sortData = getDataSort(data, sort.order, colSort);
        var visibleData = getVisibleData(sortData, filterText, 1, itemsPerPage);

        dispatch({
            type: types.SORT_ROWS,
            payload: {
                sortData,
                visibleData,
                sort,
                colSort
            }
        });
    }
};

export const selectStartDate = (startDate) => {
    return {
        type: types.SELECT_START_DATE,
        startDate
    }
};

export const selectEndDate = (endDate) => {
    return {
        type: types.SELECT_END_DATE,
        endDate
    }
};

export const resetStateAvailability = () => {
    return {
        type: types.RESET_STATE
    }
};

export const fetchAvailability = (isFirstGet, pagination, startDate, endDate) => {
    return (dispatch) => {
        dispatch({
            type: types.LOAD_DATA_ATTEMPTED
        });

        get('/availability/' + startDate.format("YYYY-MM-DD") + '/' + endDate.format("YYYY-MM-DD"))
            .then(data => {
                pagination.items = data.length;
                for (let i = 0; i < pagination.items; i++) {
                    data[i].percentAvailability = calPercentage(data[i].sinDisponibilidad, data[i].total);
                }
                data = getDataSort(data, 'desc', 'sinDisponibilidad');
                if (isFirstGet) pagination.itemsPerPage = 10;
                var visibleData = getVisibleData(data, '', 1, pagination.itemsPerPage);
                pagination.pages = getCantPages(pagination.items, pagination.itemsPerPage);
                dispatch({
                    type: types.LOAD_DATA_SUCCEEDED,
                    payload: {
                        data,
                        visibleData,
                        pagination
                    }
                });
            })
            .catch(err => {
                console.error(err);
                dispatch({
                    type: types.LOAD_DATA_FAILED
                })
            })
    }
};


/* ================================================================= */

import fetch from 'isomorphic-fetch';

export const get = url => {
    return fetch(url).then(response => {
        if (response.ok) return response.json();
        throw {
            status: response.status,
            text: response.statusText
        }
    });
};

const getFilterDataAvailability = (data, filterText) => {
    if (filterText) {
        var dataFilter = data.filter(obj => obj.id.toString().includes(filterText) || obj.host.includes(filterText) ? true : false);
        return dataFilter.length ? dataFilter : false;
    } else {
        return data;
    }
};

const getPaginationData = (data, actualPage, itemsPerPage) => data.slice(itemsPerPage * (actualPage - 1), itemsPerPage + (itemsPerPage * (actualPage - 1)));

const getVisibleData = (data, filterText, actualPage, itemsPerPage) => {
    let result = getFilterDataAvailability(data, filterText);
    result = getPaginationData(result, actualPage, itemsPerPage);

    return result;
};

const getCantPages = (cantRows, itemsPerPage) => Math.ceil(cantRows / itemsPerPage);

const calPercentage = (numerator, nominator) => Math.round((numerator / nominator) * 100);

const getDataSort = (data, order, colSort) => {
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