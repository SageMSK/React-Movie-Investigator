import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/HomePage';
import AboutPage from './components/common/AboutPage';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={HomePage} />
    <Route path="about" components={AboutPage} />
  </Route>
);