import axios from 'axios';
import { browserHistory } from 'react-router';

import { headerConfig, errorMessage } from './index';
import { AUTH_USER, DE_AUTH_USER } from './types';

export function signUpUser({ email, password }) {
  return function (dispatch) {
    axios.post('/signup', { email, password }, headerConfig)
      .then(response => {
        headerConfig.headers['x-auth'] = response.data.token;
        localStorage.setItem('token', response.data.token);
        dispatch({ type: AUTH_USER });
        browserHistory.push('/');
      }).catch(err => dispatch(errorMessage(err.response.data.message)));
  };
}

export function signInUser({ email, password }) {
  return function (dispatch) {
    axios.post('/signin', { email, password }, headerConfig)
      .then(response => {
        headerConfig.headers['x-auth'] = response.data.token;
        localStorage.setItem('token', response.data.token);
        dispatch({ type: AUTH_USER });
        browserHistory.push('/');
      }).catch(err => dispatch(errorMessage(err.response.data.message)));
  };
}

export function signOutUser() {
  return function (dispatch) {
    axios.delete('/user/me/token', headerConfig)
      .then(response => {
        headerConfig.headers['x-auth'] = null;
        localStorage.removeItem('token');
        dispatch({ type: DE_AUTH_USER });
        browserHistory.push('/');
      }).catch(err => console.log(err.response.data));
  };
}