import axios from 'axios';
import { GET_ALL_REVIEWS, GET_REVIEW, CREATE_REVIEW, DELETE_REVIEW } from './types';

const ROOT_URL = 'http://localhost:3090';

export function getAllReviews() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/movies`)
      .then(response => {
        dispatch({ type: GET_ALL_REVIEWS, payload: response });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function getReview(paramId) {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/movies/${paramId}`)
      .then(response => {
        dispatch({ type: GET_REVIEW, payload: response });
      })
      .catch(err => {
        console.log(err);
      });
  }
}