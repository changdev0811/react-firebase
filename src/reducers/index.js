import { combineReducers } from 'redux';
import authReducer from './authReducer';
// import studentReducer from './studentReducer';
// import genderReducer from './genderReducer';

export default combineReducers({
  auth: authReducer,
//   student:studentReducer,
//   gender:genderReducer,
});