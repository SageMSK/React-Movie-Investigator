import axios from 'axios';
import { AUTH_USER, DE_AUTH_USER } from './actionTypes';

export function signUpUser(userInfo, callback) {
  return function action(dispatch) {
    axios.post('/v1/user/signup', userInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function signInUser(userInfo, callback) {
  return function action(dispatch) {
    axios.post('/v1/users/signin', userInfo)
      .then((response) => {
        console.log(response.data);
      })
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
