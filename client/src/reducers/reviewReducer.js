import { GET_ALL_REVIEWS, GET_REVIEW } from '../actions/types';

const INITIAL_STATE = { allReviews: [], singleReviewPost: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return { ...state, allReviews: action.payload.data };

    case GET_REVIEW:
      return { ...state, singleReviewPost: action.payload.data };

    default:
      return state;
  }
}