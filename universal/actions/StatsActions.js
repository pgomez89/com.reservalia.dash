import * as types from '../constants/ActionTypes';
import stats from '../lib/stats';

export const getTotalSales = () => {
    return (dispatch, getState) => {
        //let {startDate, endDate} = getState().appReducers.boxes;//Tomo del estado
        // dispatch({type: types.LOAD_DATA_ATTEMPTED});
        stats.getTotalSales()
            .then(data => {
                dispatch({type: types.LOAD_TOTAL_SALES, data:{ metric:"totalSales",value:data}});
            })
            .catch(error => {
                dispatch({type: types.LOAD_DATA_FAILED, error});
            });
    }
};

export const getSalesOK = () => {
    return (dispatch, getState) => {
        //let {startDate, endDate} = getState().appReducers.boxes;//Tomo del estado
        // dispatch({type: types.LOAD_DATA_ATTEMPTED});
        stats.getSalesOK()
            .then(data => {
                dispatch({type: types.LOAD_SALES_OK, data: {metric: "salesOK", value:data.oneShot }} );
            })
            .catch(error => {
                dispatch({type: types.LOAD_DATA_FAILED, error});
            });
    }
};


export const getSalesWithBookingStatus = () => {
    return (dispatch, getState) => {
        //let {startDate, endDate} = getState().appReducers.boxes;//Tomo del estado
        // dispatch({type: types.LOAD_DATA_ATTEMPTED});
        stats.getSalesWithBookingStatus()
            .then(data => {
                data.forEach( metric =>  dispatch({type: types.LOAD_SALES_WITH_BOOKING_STATUS, data: {metric: metric._id, value:metric.count}}) );
            })
            .catch(error => {
                dispatch({type: types.LOAD_DATA_FAILED, error});
            });
    }
};

export const getTotalErrors = ()=> {
    return (dispatch,getState) => {
        stats.getTotalErrors()
            .then(data => {
                console.log(data);
                dispatch({type: types.LOAD_TOTAL_ERRORS, data:{ metric:"totalErrors",value:data}});
            })
            .catch(error => {
                dispatch({type: types.LOAD_DATA_FAILED, error});
            });
    }
};

export const getUnknownErrors = ()=> {
    return (dispatch,getState) => {
        stats.getUnknownErrors()
            .then(data => {
                dispatch({type: types.LOAD_UNKNOWN_ERRORS, data:{ metric:"unknownErrors",value:data}});
            })
            .catch(error => {
                dispatch({type: types.LOAD_DATA_FAILED, error});
            });
    }
};

export const getErrorsWithBookingStatus = ()=> {
    return (dispatch,getState) => {
        stats.getErrorsWithBookingStatus()
            .then(data => {
                console.log(data);
                data.forEach( metric =>  dispatch({type: types.LOAD_ERRORS_WITH_BOOKING_STATUS, data: {metric: metric._id, value:metric.count}}) );
            })
            .catch(error => {
                dispatch({type: types.LOAD_DATA_FAILED, error});
            });
    }
};

export const getTotalAttemps = ()=> {
    return (dispatch,getState) => {
        stats.getTotalAttemps()
            .then(data => {
                dispatch({type: types.LOAD_TOTAL_ATTEMPS, data:{ metric:"attemps",value:data}});
            })
            .catch(error => {
                dispatch({type: types.LOAD_DATA_FAILED, error});
            });
    }
};

export const getTotalTokens = ()=> {
    return (dispatch,getState) => {
        stats.getTotalTokens()
            .then(data => {
                dispatch({type: types.LOAD_TOTAL_TOKENS, data:{ metric:"tokens",value:data}});
            })
            .catch(error => {
                dispatch({type: types.LOAD_DATA_FAILED, error});
            });
    }
};


