// src/store/reducers/index.js
import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
// Импортируйте другие редьюсеры при необходимости

const rootReducer = combineReducers({
  events: eventsReducer,
});

export default rootReducer;
