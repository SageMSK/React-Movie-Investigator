import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

import * as publicReviewsActions from '../../actions/publicReviewsActions';

class MovieDetails extends Component {
  componentWillMount() {
    this.props.getSingleReview(this.props.params.id);
  }

  render() {
    console.log(this.props)
    const { review } = this.props;

    if (!review) {
      return <div>Loading...</div>
    }
    
    return (
      <div>
        <Link to="movies">Back to list</Link>

        <h2>{review.title}</h2>
        <h5>Score: {review.score}</h5>
        <p>{review.review}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    review: state.review.singleReviewPost
  }
}

export default connect(mapStateToProps, publicReviewsActions)(MovieDetails);