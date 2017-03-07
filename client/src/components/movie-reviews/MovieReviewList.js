import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as publicReviewsActions from '../../actions/publicReviewsActions';

class MovieReviewList extends Component {
  componentWillMount() {
    this.props.getAllReviews();
  }

  renderReviews() {
    return this.props.reviews.map(review => {
      return (
        <div className="col-sm-4 col-md-3" key={review._id}>
          <div className="thumbnail">
            <img src="" alt={review.title.toUpperCase()} />
            <div className="caption">
              <h3>{review.title}</h3>
              <p><Link to={`/movies/${review._id}`} className="btn">Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="movie-review-list" className="container">
        <div className="row">
          <h2 className="title">Movies</h2>
            {this.renderReviews()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { reviews: state.review.allReviews };
}

export default connect(mapStateToProps, publicReviewsActions)(MovieReviewList);