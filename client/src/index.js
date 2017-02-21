import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

import reducers from './reducers';
import routes from './routes';
import { AUTH_USER } from './actions/types';
import { headerConfig } from './actions/index';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const tokenExists = localStorage.getItem('token');
// If we have a token, the user is signed in
if (tokenExists) {
  headerConfig.headers['x-auth'] = tokenExists;
  store.dispatch({ type: AUTH_USER }); // update app state
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);