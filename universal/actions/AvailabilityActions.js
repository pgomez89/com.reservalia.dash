import * as types from '../constants/ActionTypes';
import * as utils from '../lib/utils';

export const chargeFilter = text => {
    return (dispatch, getState) => {
        var visibleData;
        var data = getState().appReducers.availability.data;
        var pagination = getState().appReducers.availability.pagination;
        var filterData = utils.getFilterDataAvailability(data, text);

        if (filterData) {
            if (text) {
                visibleData = utils.getPaginationData(filterData, pagination.actualPage, pagination.itemsPerPage);
                pagination.items = filterData.length;
            } else {
                visibleData = utils.getPaginationData(data, 1, pagination.itemsPerPage);
                pagination.items = data.length;
            }

            pagination.pages = utils.getCantPages(pagination.items, pagination.itemsPerPage);

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
                type: types.CHANGE_FILTER_NO_MATCHING,
                text
            });
        }
    };
};

export const changePageNumber = numberPage => {
    return (dispatch, getState) => {
        var data = getState().appReducers.availability.data;
        var filterText = getState().appReducers.availability.filterText;
        var itemsPerPage = getState().appReducers.availability.pagination.itemsPerPage;
        var visibleData = utils.getVisibleData(data, filterText, numberPage, itemsPerPage);

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
        var filterText = getState().appReducers.availability.filterText;
        var pagination = getState().appReducers.availability.pagination;

        var nextPage = pagination.actualPage != pagination.pages ? pagination.actualPage + 1 : pagination.actualPage;
        var visibleData = utils.getVisibleData(data, filterText, nextPage, pagination.itemsPerPage);

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
        var filterText = getState().appReducers.availability.filterText;
        var pagination = getState().appReducers.availability.pagination;

        var previousPage = pagination.actualPage != 1 ? pagination.actualPage - 1 : pagination.actualPage;
        var visibleData = utils.getVisibleData(data, filterText, previousPage, pagination.itemsPerPage);

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
    return (dispatch,getState) => {
        var data = getState().appReducers.availability.data;
        var filterText = getState().appReducers.availability.filterText;
        var pagination = getState().appReducers.availability.pagination;
        var visibleData;

        if (filterText) {
            var filterData = utils.getFilterDataAvailability(data, filterText);
            visibleData = utils.getPaginationData(filterData, 1, cantRows);
            pagination.items = filterData.length;
        } else {
            visibleData = utils.getPaginationData(data, 1, cantRows);
            pagination.items = data.length;
        }

        pagination.pages = utils.getCantPages(pagination.items, cantRows);

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

export const sortRows = colSort => {
    return (dispatch,getState) => {
        let data = getState().appReducers.availability.data;
        let filterText = getState().appReducers.availability.filterText;
        let sort = getState().appReducers.availability.sort;
        let itemsPerPage = getState().appReducers.availability.pagination.itemsPerPage;

        if (colSort == sort.colSort) {
            sort.order = sort.order == 'desc' ? 'asc' : 'desc';
        } else {
            sort.order = 'desc';
        }

        var sortData = utils.getDataSort(data, sort.order, colSort);
        var visibleData = utils.getVisibleData(sortData, filterText, 1, itemsPerPage);

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

export const fetchAvailability = isFirstGet => {
    return (dispatch,getState) => {
        let pagination = getState().appReducers.availability.pagination;
        let startDate = getState().appReducers.availability.startDate;
        let endDate = getState().appReducers.availability.endDate;

        dispatch({
            type: types.LOAD_DATA_ATTEMPTED
        });

        utils.getData('/availability/' + startDate.format("YYYY-MM-DD") + '/' + endDate.format("YYYY-MM-DD"))
            .then(data => {
                pagination.items = data.length;
                for (let i = 0; i < pagination.items; i++) {
                    data[i].percentAvailability = utils.calPercentage(data[i].sinDisponibilidad, data[i].total);
                }
                data = utils.getDataSort(data, 'desc', 'sinDisponibilidad');
                if (isFirstGet) pagination.itemsPerPage = 10;
                var visibleData = utils.getVisibleData(data, '', 1, pagination.itemsPerPage);
                pagination.pages = utils.getCantPages(pagination.items, pagination.itemsPerPage);

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
                    err
                })
            })
    }
};
