import { AUTH_USER, DE_AUTH_USER } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authorized: true, error: '' };
    case DE_AUTH_USER:
      return { ...state, authorized: false, error: '' };

    default:
      return state;
  }
}