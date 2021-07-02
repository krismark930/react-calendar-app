import { combineReducers } from 'redux';

import calendarReducer from './calendarReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    auth: authReducer
});

export default rootReducer;