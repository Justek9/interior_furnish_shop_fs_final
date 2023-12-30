import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './productsRedux.js';

import initialState from './initialState';
import userReducer from './userRedux.js';

const subReducers = {
  products: productsReducer,
  user: userReducer,
};

const reducer = combineReducers(subReducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

export default store;
