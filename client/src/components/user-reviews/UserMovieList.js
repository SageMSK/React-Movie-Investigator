import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as reviewActions from '../../actions/reviewActions';

class UserMovieList extends Component {
  componentWillMount() {
    this.props.getAllUsersReviews();
  }

  renderAllUserReview() {
    return this.props.reviews.map(review => {
      return (
        <li className="list-group-item" key={review._id}>
          <Link to={`/movies/${review._id}`}>
            <p>{review.title}</p>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { reviews } = this.props;
    if (!reviews) {
      return <div>Loading...</div>
    }

    return (
      <div id="user-movie-list" className="container">
        <h1>Your Movie Reviews</h1>
        <Link to="/username/movies/createnew" className="btn">Add a review</Link>
        <ul className="list-group">
          {this.renderAllUserReview()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { reviews: state.review.allReviews };
}

export default connect(mapStateToProps, reviewActions)(UserMovieList);