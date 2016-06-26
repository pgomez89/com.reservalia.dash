import * as types from '../constants/ActionTypes';

export const chargeFilter = text => {
    return (dispatch, getState) => {

        var data = getState().appReducers.availability.data;
        var actualPage = getState().appReducers.availability.pagination.actualPage;
        var itemsPerPage = getState().appReducers.availability.pagination.itemsPerPage;

        var visibleData = getVisibleData(data, text, actualPage, itemsPerPage);
        var items;
        var pages;

        if (text) {
            items = visibleData.length;
            pages = getCantPages(items, itemsPerPage);
        } else {
            items = data.length;
            pages = getCantPages(items, itemsPerPage);
        }

        dispatch({
            type: types.CHANGE_FILTER,
            payload: {
                text,
                visibleData,
                pages
            }
        });
    };
};

export const changePageNumber = numberPage => {
    return {
        type: types.CHANGE_PAGE_NUMBER,
        numberPage
    }
};

export const changeNextPage = () => {
    return (dispatch, getState) => {
        var data = getState().appReducers.availability.data;
        var actualPage = getState().appReducers.availability.pagination.actualPage;
        var pages = getState().appReducers.availability.pagination.pages;
        var itemsPerPage = getState().appReducers.availability.pagination.itemsPerPage;
        var filtro = getState().appReducers.availability.filtro;

        var nextPage = actualPage != pages ? actualPage + 1 : actualPage;
        var visibleData = getVisibleData(data, filtro, nextPage, itemsPerPage);
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
        var actualPage = getState().appReducers.availability.pagination.actualPage;
        var itemsPerPage = getState().appReducers.availability.pagination.itemsPerPage;
        var filtro = getState().appReducers.availability.filtro;

        var previousPage = actualPage != 1 ? actualPage - 1 : actualPage;
        var visibleData = getVisibleData(data, filtro, previousPage, itemsPerPage);
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

export const fetchAvailability = () => {
    return (dispatch, getState) => {
        dispatch({
            type: types.LOAD_DATA_ATTEMPTED
        });

        get('http://www.mocky.io/v2/576c49dc1100002915666804')
            .then(data => {
                var items = data.length;
                var itemsPerPage = getState().appReducers.availability.pagination.itemsPerPage;
                var pages = getCantPages(items, itemsPerPage);
                dispatch({
                    type: types.LOAD_DATA_SUCCEEDED,
                    payload: {
                        data,
                        items,
                        pages
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

const getVisibleData = (data, filtro, actualPage, itemsPerPage) => {

    if (filtro) {
        filtro = filtro.toLowerCase();
    }

    var result = data.filter(obj => obj.id.includes(filtro) || obj.host.includes(filtro) ? true : false)
        .slice(itemsPerPage * (actualPage - 1), itemsPerPage + (itemsPerPage * (actualPage - 1)));

    return result.length ? result : [{result: 'No matching records found'}];
};

const getCantPages = (cantRows, itemsPerPage) => Math.ceil(cantRows / itemsPerPage);