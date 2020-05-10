import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './home/reducer';

export const getStore = () => {
  return createStore(
    combineReducers({
      homeReducer
    }),
    applyMiddleware(thunk)
  )
}
// 数据脱水
export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(combineReducers({
      homeReducer
    }),
    defaultState,
    applyMiddleware(thunk)
  )
}