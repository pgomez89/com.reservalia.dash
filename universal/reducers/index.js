import { combineReducers } from 'redux';
import availability from './AvailabilityReducer';
import monitor from './MonitorReducer'

const rootReducer = combineReducers({
    monitor,
    availability
});

export default rootReducer;
