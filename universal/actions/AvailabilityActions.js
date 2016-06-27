import * as types from '../constants/ActionTypes';

export const chargeFilter = text => {
    return (dispatch, getState) => {

        var data = getState().appReducers.availability.data;
        var pagination = getState().appReducers.availability.pagination;

        if (text) {
            var filterData = getFilterDataAvailability(data, text);
            pagination.visibleData = getPaginationData(filterData, pagination.actualPage, pagination.itemsPerPage);
            pagination.items = filterData.length;
            pagination.pages = getCantPages(pagination.items, pagination.itemsPerPage);
        } else {
            pagination.visibleData = getPaginationData(data, 1, pagination.itemsPerPage);
            pagination.items = data.length;
            pagination.pages = getCantPages(pagination.items, pagination.itemsPerPage);
        }

        dispatch({
            type: types.CHANGE_FILTER,
            payload: {
                text,
                pagination
            }
        });
    };
};

export const changePageNumber = numberPage => {
    return (dispatch, getState) => {
        var data = getState().appReducers.availability.data;
        var itemsPerPage = getState().appReducers.availability.pagination.itemsPerPage;
        var filtro = getState().appReducers.availability.filtro;

        var visibleData = getVisibleData(data, filtro, numberPage, itemsPerPage);

        dispatch({
            type: types.CHANGE_PAGE_NUMBER,
            payload: {
                numberPage,
                visibleData
            }
        })
    }
};

export const changeNextPage = () => {
    return (dispatch, getState) => {
        var data = getState().appReducers.availability.data;
        var pagination = getState().appReducers.availability.pagination;
        var filtro = getState().appReducers.availability.filtro;

        var nextPage = pagination.actualPage != pagination.pages ? pagination.actualPage + 1 : pagination.actualPage;
        var visibleData = getVisibleData(data, filtro, nextPage, pagination.itemsPerPage);
        dispatch({
            type: types.CHANGE_NEXT_PAGE,
            payload: {
                visibleData,
                nextPage
            }
        });
    }
};

export const changePreviousPage = () => {
    return (dispatch, getState) => {
        var data = getState().appReducers.availability.data;
        var pagination = getState().appReducers.availability.pagination;
        var filtro = getState().appReducers.availability.filtro;

        var previousPage = pagination.actualPage != 1 ? pagination.actualPage - 1 : pagination.actualPage;
        var visibleData = getVisibleData(data, filtro, previousPage, pagination.itemsPerPage);

        dispatch({
            type: types.CHANGE_PREVIOUS_PAGE,
            payload: {
                visibleData,
                previousPage
            }
        });
    }
};


export const selectShowRows = cantRows => {
    return (dispatch, getState) => {
        var data = getState().appReducers.availability.data;
        var filtro = getState().appReducers.filtro || '';
        var actualPage = 1;

        var visibleData = getVisibleData(data, filtro, actualPage, cantRows);
        var items = data.length;
        var pages = getCantPages(items, cantRows);

        dispatch({
            type: types.SELECT_SHOW_ROWS,
            payload: {
                cantRows,
                visibleData,
                pages,
                actualPage
            }
        });
    };
};

export const fetchAvailability = (isFirstGet) => {
    return (dispatch, getState) => {
        dispatch({
            type: types.LOAD_DATA_ATTEMPTED
        });

        get('http://www.mocky.io/v2/576c49dc1100002915666804')
            .then(data => {

                var pagination = getState().appReducers.availability.pagination;
                var visibleData;

                pagination.items = data.length;

                if (isFirstGet) {
                    pagination.actualPage = 1;
                    pagination.itemsPerPage = 10;
                    visibleData = getVisibleData(data, '', pagination.actualPage, pagination.itemsPerPage);
                    pagination.pages = getCantPages(pagination.items, 10);
                } else {
                    var filtro = getState().appReducers.availability.filtro;

                    pagination.pages = getCantPages(pagination.items, 10);
                    visibleData = getVisibleData(data, filtro, actualPage, itemsPerPage)
                }

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
                dispatch({
                    type: types.LOAD_DATA_FAILED,
                    error: err
                })
            })
    }
};


/* ======================= */

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

const getFilterDataAvailability = (data, filtro) => {
    if (filtro) {
        filtro = filtro ? filtro.toLowerCase() : filtro;
        return data.filter(obj => obj.id.includes(filtro) || obj.host.includes(filtro) ? true : false);
    } else {
        return data;
    }
};

const getPaginationData = (data, actualPage, itemsPerPage) => data.slice(itemsPerPage * (actualPage - 1), itemsPerPage + (itemsPerPage * (actualPage - 1)));

const getVisibleData = (data, filtro, actualPage, itemsPerPage) => {
    let result = getFilterDataAvailability(data, filtro);
    result = getPaginationData(result, actualPage, itemsPerPage);

    return result.length ? result : [{result: 'No matching records found'}];
};

const getCantPages = (cantRows, itemsPerPage) => Math.ceil(cantRows / itemsPerPage);
