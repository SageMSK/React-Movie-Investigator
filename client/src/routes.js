import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/common/HomePage';
import AboutPage from './components/common/AboutPage';
import ErrorPage from './components/common/ErrorPage';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup';

import MovieList from './components/movie-reviews/MovieList';
import MovieDetails from './components/movie-reviews/MovieDetails';

import UserMovieList from './components/user-reviews/UserMovieList';
import CreateNewMovieReview from './components/user-reviews/CreateNewMovieReview';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={HomePage} />
    <Route path="about" components={AboutPage} />
    <Route path="signup" components={SignUp} />
    <Route path="signin" components={SignIn} />
    <Route path="movies" components={MovieList} />
    <Route path="movies/:id" components={MovieDetails} />
    <Route path="username/movies" components={UserMovieList} />
    <Route path="username/movies/newreview" components={CreateNewMovieReview} />
    <Route path="*" components={ErrorPage} />
  </Route>
);