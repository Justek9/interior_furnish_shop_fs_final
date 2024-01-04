import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initialState';
import productsReducer from './productsRedux.js';
import userReducer from './userRedux.js';
import cartReucer from './cartRedux.js';
import isloadingReducer from './isLoadingRedux';
import isErrorReducer from './isErrorRedux';

const subReducers = {
  products: productsReducer,
  user: userReducer,
  isLoading: isloadingReducer,
  isError: isErrorReducer,
  cart: cartReucer,
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
