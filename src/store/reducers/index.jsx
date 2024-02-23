// index.jsx

import { combineReducers } from 'redux';
import usersReducer from './user';

const rootReducer = combineReducers({
  users: usersReducer  
});

export default rootReducer;