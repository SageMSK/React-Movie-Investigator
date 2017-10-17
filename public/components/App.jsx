import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import our components for our routes
import Navbar from './common/Navbar';
import HomePage from './common/HomePage';
import About from './common/About';
import NotFound from './common/NotFound';
import SignInForm from './users/auth/SignInForm';
import SignUpForm from './users/auth/SignUpForm';

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
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
