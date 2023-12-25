// store.js
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // You need to create reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
