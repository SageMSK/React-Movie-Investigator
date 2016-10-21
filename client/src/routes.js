import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/HomePage';
import AboutPage from './components/common/AboutPage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={HomePage} />
    <Route path="about" components={AboutPage} />
    <Route path="signup" components={SignUp} />
    <Route path="signin" components={SignIn} />
  </Route>
);