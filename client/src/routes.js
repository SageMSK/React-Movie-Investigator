import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/common/HomePage';
import AboutPage from './components/common/AboutPage';
import ErrorPage from './components/common/ErrorPage';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import RequireAuth from './components/auth/RequireAuth';

import MovieReviewList from './components/movie-reviews/MovieReviewList';
import MovieReview from './components/movie-reviews/MovieReview';

import UserMovieList from './components/user-reviews/UserMovieList';
import CreateNewReview from './components/user-reviews/CreateNewReview';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={HomePage} />
    <Route path="about" components={AboutPage} />
    <Route path="signin" components={SignIn} />
    <Route path="signup" components={SignUp} />
    <Route path="movies" components={MovieReviewList} />
    <Route path="movies/:id" components={MovieReview} />
    <Route path="username/movies" components={UserMovieList} />
    <Route path="username/movies/createnew" components={CreateNewReview} />
    <Route path="*" components={ErrorPage} />
  </Route>
);