import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import our components for our routes
import Nav from './Nav';
import HomePage from './HomePage';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
