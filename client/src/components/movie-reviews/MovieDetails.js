import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import * as reviewActions from '../../actions/reviewActions';
import toastr from 'toastr';

class MovieDetails extends Component {
  componentWillMount() {
    this.props.getReview(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deleteReview(this.props.params.id)
  }  

  render() {
    const { review } = this.props;

    if (!review) {
      return <div>Loading...</div>
    }
    console.log(this.props)
    return (
      <div>
        <Link to="movies">Back to list</Link>
        <button className="btn btn-danger pull-right" onClick={this.onDeleteClick.bind(this)}>Delete Review</button>

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

export default connect(mapStateToProps, reviewActions)(MovieDetails);