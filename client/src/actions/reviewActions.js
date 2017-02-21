import axios from 'axios';
import { browserHistory } from 'react-router';

import { headerConfig } from './index';
import { GET_ALL_REVIEWS, GET_REVIEW } from './types';

export function getAllUsersReviews() {
  return function (dispatch) {
    axios.get('username/movies', headerConfig)
      .then(response => {
        dispatch({ type: GET_ALL_REVIEWS, payload: response });
      }).catch(err => console.log(err.response.data));
  };
}

export function getUsersReview(reviewId) {
  return function (dispatch) {
    axios.get(`username/movies/${reviewId}`, headerConfig)
      .then(response => {
        dispatch({ type: GET_REVIEW, payload: response });
      }).catch(err => console.log(err.response.data));
  };
}

export function createNewReview({ title, score, review }) {
  return function (dispatch) {
    axios.post('username/movies', { title, score, review }, headerConfig)
      .then(response => {
        browserHistory.push('/movies');
      }).catch(err => console.log(err.response.data));
  };
}

export function deleteReview(reviewId) {
  return function (dispatch) {
    axios.delete(`username/movies/${reviewId}`, headerConfig)
      .then(response => {
        browserHistory.push('/movies');
      }).catch(err => console.log(err.response.data));
  };
}