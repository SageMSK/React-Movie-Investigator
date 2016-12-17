import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as reviewActions from '../../actions/reviewActions';

class MovieDetails extends Component {
  componentWillMount() {
    this.props.getReview(this.props.params.id);
  }

  render() {
    const { review } = this.props;

    if (!review) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>{review.title}</h2>
        <h5>{review.score}</h5>
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

export default connect(mapStateToProps, reviewActions)(MovieDetails);