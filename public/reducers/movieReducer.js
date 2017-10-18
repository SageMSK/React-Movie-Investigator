import { GET_ALL_MOVIES, GET_SINGLE_MOVIE } from './../actions/actionTypes';

const initialState = {
  allMovies: [],
  singleReview: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return { ...state };

    case GET_SINGLE_MOVIE:
      return { ...state };

    default:
      return state;
  }
}
