import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userAuthReducer from './userAuthReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: userAuthReducer,
  movie: movieReducer,
});

export default rootReducer;
