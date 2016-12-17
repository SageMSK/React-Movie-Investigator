import axios from 'axios';
import { browserHistory } from 'react-router';
import { GET_ALL_REVIEWS, GET_REVIEW } from './types';
import toastr from 'toastr';

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

export function getReview(reviewId) {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/movies/${reviewId}`)
      .then(response => {
        dispatch({ type: GET_REVIEW, payload: response });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function createNewReview({ title, score, review }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/movies`, { title, score, review })
      .then(res => {
        browserHistory.push('/movies');
        toastr.success('New Review Created.');
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function deleteReview(reviewId) {
  return function (dispatch) {
    axios.delete(`${ROOT_URL}/movies/${reviewId}`)
      .then(res => {
        browserHistory.push('/movies');
        toastr.success('Review Successfully Deleted.');
      })
      .catch(err => {
        console.log(err);
      });
  };
}