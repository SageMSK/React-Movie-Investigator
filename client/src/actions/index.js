import axios from 'axios';
import { AUTH_ERROR } from './types';

axios.defaults.baseURL = 'http://localhost:3000';
export let headerConfig = {
  headers: {
    'x-auth': null
  }
};

export function errorMessage(message) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}