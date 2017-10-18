import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import our components for our routes
import Navbar from './common/Navbar';
import HomePage from './common/HomePage';
import About from './common/About';
import NotFound from './common/NotFound';
import SignInForm from './users/auth/SignInForm';
import SignUpForm from './users/auth/SignUpForm';
import CreateNewMovieForm from './movies/CreateNewMovieForm';
import MovieList from './movies/MovieList';
import MovieInfoPage from './movies/MovieInfoPage';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/movies" component={MovieList} />
          <Route path="/movie/new" component={CreateNewMovieForm} />
          <Route path="/movie/:id" component={MovieInfoPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
