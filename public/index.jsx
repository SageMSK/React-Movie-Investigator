import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

// Import our SASS file
import './styles/main.scss';

import App from './components/App';

import configureStore from './store/configureStore';

const store = configureStore();

// Axios default settings
const AUTH_TOKEN = localStorage.getItem('token');
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
