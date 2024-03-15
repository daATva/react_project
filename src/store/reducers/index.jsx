// src/store/reducers/index.js
import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import courseDataReducer from './courseDataReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  courseData: courseDataReducer,
});

export default rootReducer;
