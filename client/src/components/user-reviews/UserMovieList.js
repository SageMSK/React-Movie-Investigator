import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as reviewActions from '../../actions/reviewActions';

class UserMovieList extends Component {
  render() {
    return (
      <div>
        <h1>Your Movie Reviews</h1>
        <Link to="username/movies/newreview">Add a review</Link>
        <p>Must be logged in.</p>
      </div>
    );
  }
}

export default connect(null, reviewActions)(UserMovieList);