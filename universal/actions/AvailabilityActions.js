import * as types from '../constants/ActionTypes';
import * as utils from '../lib/utils';

export const chargeFilter = text => {
    return (dispatch, getState) => {
        let {data, pagination} = getState().appReducers.availability;
        let filterData = utils.getFilterDataAvailability(data, text);

        if (filterData) {
            let visibleData;
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
    return ({
        type: types.CHANGE_PAGE_NUMBER,
        numberPage
    })
};

export const changeNextPage = () => {
    return (dispatch, getState) => {
        let {pagination} = getState().appReducers.availability;

        let nextPage = pagination.actualPage != pagination.pages ? pagination.actualPage + 1 : pagination.actualPage;

        dispatch({
            type: types.CHANGE_NEXT_PAGE,
            nextPage
        });
    }
};

export const changePreviousPage = () => {
    return (dispatch, getState) => {
        let {pagination} = getState().appReducers.availability;

        let previousPage = pagination.actualPage != 1 ? pagination.actualPage - 1 : pagination.actualPage;

        dispatch({
            type: types.CHANGE_PREVIOUS_PAGE,
            previousPage
        });
    }
};


export const selectShowRows = cantRows => {
    return ({
        type: types.SELECT_SHOW_ROWS,
        cantRows
    });
};

export const sortRows = colSort => {
    return (dispatch,getState) => {
        let {data, filterText, sort, pagination} = getState().appReducers.availability;
        let itemsPerPage = pagination.itemsPerPage;

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

        utils.getDataJson('/availability/' + startDate.format("YYYY-MM-DD") + '/' + endDate.format("YYYY-MM-DD"))
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
