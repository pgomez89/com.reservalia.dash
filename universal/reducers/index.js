import { combineReducers } from 'redux';
import availability from './AvailabilityReducer';
import monitor from './MonitorReducer'
import stats from './StatsReducer'
import boxes from './BoxesReducer'

const rootReducer = combineReducers({
    monitor,
    availability,
    stats,
    boxes

});

export default rootReducer;
