// src/store/reducers/index.tsx
import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import courseDataReducer from './courseDataReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  courseData: courseDataReducer,
});

export default rootReducer;
