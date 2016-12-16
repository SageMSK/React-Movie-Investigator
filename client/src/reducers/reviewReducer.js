import { FETCH_ALL_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from '../actions/types';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return { ...state, all: action.payload.data };

    default:
      return state;
  }
}