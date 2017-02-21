import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/HomePage';
import AboutPage from './components/common/AboutPage';
import ErrorPage from './components/common/ErrorPage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup';
import MovieList from './components/movie-reviews/MovieList';
import MovieDetails from './components/movie-reviews/MovieDetails';
import CreateNewMovieReview from './components/movie-reviews/CreateNewMovieReview';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={HomePage} />
    <Route path="about" components={AboutPage} />
    <Route path="movies" components={MovieList} />
    <Route path="movies/newreview" components={CreateNewMovieReview} />
    <Route path="movies/:id" components={MovieDetails} />
    <Route path="signup" components={SignUp} />
    <Route path="signin" components={SignIn} />
    <Route path="*" components={ErrorPage} />
  </Route>
);