import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Исправлено для использования именованного импорта
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Используйте именованный импорт
);

console.log(store);

export default store;
