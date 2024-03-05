// index.jsx

import { combineReducers } from 'redux';
import usersReducer from './favoritesReducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
