import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userAuthReducer from './userAuthReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: userAuthReducer,
});

export default rootReducer;
