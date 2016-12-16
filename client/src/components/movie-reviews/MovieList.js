import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as reviewActions from '../../actions/reviewActions';

class MovieList extends Component {
  componentWillMount() {
    this.props.fetchAllPosts();
  }

  renderReviews() {
    return this.props.reviews.map(review => {
      return (
        <li className="list-group-item" key={review.id}>
          <p>{review.title}</p>
        </li>
      )
    })
  }  

  render() {
    return (
      <div>
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
    reviews: state.review.all
  }
}

export default connect(mapStateToProps, reviewActions)(MovieList);