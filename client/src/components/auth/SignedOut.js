import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignedOut extends Component {
  componentWillMount() {
    this.props.signOutUser();
  }

  render() {
    return (
      <div>
        <h4>We are sorry to see you go!</h4>
        <p>Do come back for more reviews!</p>
      </div>
    );
  }
}

export default connect(null, actions)(SignedOut);