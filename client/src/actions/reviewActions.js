import axios from 'axios';
import { FETCH_ALL_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from './types';

const ROOT_URL = 'http://localhost:3090';

export function fetchAllPosts() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/movies`)
      .then(response => {
        dispatch({ type: FETCH_ALL_POSTS, payload: response });
      })
      .catch(err => {
        console.log(err);
      });
  };
}