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
                console.log(data);
                data.forEach( metric =>  dispatch({type: types.LOAD_SALES_WITH_BOOKING_STATUS, data: {metric: metric._id, value:metric.count}}) );
            })
            .catch(error => {
                dispatch({type: types.LOAD_DATA_FAILED, error});
            });
    }
}