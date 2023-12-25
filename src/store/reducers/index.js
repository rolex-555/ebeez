// reducers/index.js
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import companyReducer from './companyReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  company: companyReducer

  // Add other reducers here if needed
});

export default rootReducer;
