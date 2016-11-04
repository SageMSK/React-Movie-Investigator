import { AUTH_USER, DE_AUTH_USER } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: '' };
      
    case DE_AUTH_USER:
      return { ...state, authenticated: false, error: '' };

    default:
      return state;
  }
}