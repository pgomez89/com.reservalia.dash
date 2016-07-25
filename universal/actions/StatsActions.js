import * as types from '../constants/ActionTypes';
import stats from '../lib/stats';

export const getTotalSales = () => {
    return (dispatch, getState) => {
        //let {startDate, endDate} = getState().appReducers.boxes;//Tomo del estado
        // dispatch({type: types.LOAD_DATA_ATTEMPTED});
        stats.getTotalSales()
            .then(data => {
                dispatch({type: types.LOAD_TOTAL_SALES, data});
            })
            .catch(error => {
                dispatch({type: types.LOAD_DATA_FAILED, error});
            });
    }
};


