import { AUTH_USER, DE_AUTH_USER, AUTH_ERROR } from './../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: '' };
      
    case DE_AUTH_USER:
      return { ...state, authenticated: false, error: '' };

    case AUTH_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}