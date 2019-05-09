import { combineReducers } from 'redux';
import authReducer from './authReducer';
import serviceReducer from './serviceReducer';
import scoreReducer from './scoreReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

export default combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  service: serviceReducer,
  score: scoreReducer
});