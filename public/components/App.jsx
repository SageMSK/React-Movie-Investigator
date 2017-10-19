import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// common
import Navbar from './common/Navbar';
import HomePage from './common/HomePage';
import About from './common/About';
import NotFound from './common/NotFound';
// User
import ProfilePage from './users/account/ProfilePage';
// User Auth
import SignInForm from './users/auth/SignInForm';
import SignUpForm from './users/auth/SignUpForm';
import PasswordResetEmailForm from './users/auth/PasswordResetEmailForm';
import UpdateNewPasswordForm from './users/auth/UpdateNewPasswordForm';
import EmailSentSuccess from './users/auth/EmailSentSuccess';
// Movie
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

          <Route path="/user" component={ProfilePage} />

          <Route path="/signin" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/password_reset" component={PasswordResetEmailForm} />
          <Route path="/update_password/:resetToken" component={UpdateNewPasswordForm} />
          <Route path="/update_password/success" component={EmailSentSuccess} />

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
