import { combineReducers } from 'redux';
import reducers from './';

const rootReducer = combineReducers({...reducers});

export default rootReducer;
