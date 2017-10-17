import {
  AUTH_USER,
  DE_AUTH_USER,
} from './../actions/actionTypes';

const initialState = {
  authenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };

    case DE_AUTH_USER:
      return { ...state, authenticated: false };

    default:
      return state;
  }
}
