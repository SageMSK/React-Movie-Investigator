import axios from 'axios';
import { browserHistory } from 'react-router';

import { headerConfig } from './index';
import { GET_ALL_REVIEWS, GET_REVIEW } from './types';

export function getAllReviews() {
  return function (dispatch) {
    axios.get('/movies', headerConfig)
      .then(response => {
        dispatch({ type: GET_ALL_REVIEWS, payload: response });
      }).catch(err => console.log(err.response.data));
  };
}

export function getSingleReview(reviewId) {
  return function (dispatch) {
    axios.get(`/movies/${reviewId}`, headerConfig)
      .then(response => {
        dispatch({ type: GET_REVIEW, payload: resposne });
      }).catch(err => console.log(err.response.data));
  };
}