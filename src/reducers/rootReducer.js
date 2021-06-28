import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    //TODO: AuthReducer
    calendar: calendarReducer,
});

export default rootReducer;