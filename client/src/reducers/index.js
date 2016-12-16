import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  review: reviewReducer
});

export default rootReducer;