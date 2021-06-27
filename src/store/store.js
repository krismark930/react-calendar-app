import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);

export default store;