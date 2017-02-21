import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as publicReviewsActions from '../../actions/publicReviewsActions';

class MovieList extends Component {
  componentWillMount() {
    this.props.getAllReviews();
  }

  renderReviews() {
    return this.props.reviews.map(review => {
      return (
        <li className="list-group-item" key={review._id}>
          <Link to={`movies/${review._id}`}>
            <p>{review.title}</p>
          </Link>
        </li>
      )
    });
  }  

  render() {
    return (
      <div>
        <div>
          <Link to="movies/newreview" className="btn btn-primary">Add New Review</Link>
        </div>

        <p>This is the  the movie review main page.</p>
        <ul className="list-group">
          {this.renderReviews()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reviews: state.review.allReviews
  }
}

export default connect(mapStateToProps, publicReviewsActions)(MovieList);