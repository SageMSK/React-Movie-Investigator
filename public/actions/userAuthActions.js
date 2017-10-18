import axios from 'axios';
import { AUTH_USER, DE_AUTH_USER } from './actionTypes';

export function signUpUser(userInfo, callback) {
  return function action(dispatch) {
    axios.post('/v1/user/signup', userInfo)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        dispatch({ type: AUTH_USER });
      })
      .then(() => callback()) // need callback to successfully redirect after action
      .catch((error) => {
        console.log(error);
      });
  };
}

export function signInUser(userInfo, callback) {
  return function action(dispatch) {
    axios.post('/v1/user/signin', userInfo)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        dispatch({ type: AUTH_USER });
      })
      .then(() => callback()) // need callback to successfully redirect after action
      .catch((error) => {
        console.log(error);
      });
  };
}

export function signOutUser() {
  return function action(dispatch) {
    localStorage.removeItem('token');
    dispatch({ type: DE_AUTH_USER });
  };
}
