import { combineReducers } from 'redux';
import availability from './AvailabilityReducer';
import monitor from './MonitorReducer'
import stats from './StatsReducer/index'

const rootReducer = combineReducers({
    monitor,
    availability,
    stats
});

export default rootReducer;
