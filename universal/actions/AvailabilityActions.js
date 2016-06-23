import * as types from '../constants/ActionTypes';

export const chargeFilter = text => {
    return {
        type:types.CHANGE_FILTER,
        text
    }
};

export const changePageNumber = numberPage => {
    return {
        type:types.CHANGE_PAGE_NUMBER,
        numberPage
    }
};

export const selectShowRows = cantRows => {
    return {
        type:types.SELECT_SHOW_ROWS,
        cantRows
    }
};
