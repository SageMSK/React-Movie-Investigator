import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutUser } from './../../actions/userAuthActions';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.logOutUser = this.logOutUser.bind(this);
  }

  logOutUser() {
    this.props.signOutUser();
  }

  renderNavbarBasedOnAuthStatus() {
    // if user is authenticated then replace the signup/signin nav links
    // list items need key attribute
    if (this.props.authenticated) {
      return (
        <li className="navbar__item" key={3}>
          <button onClick={this.logOutUser}>Sign Out</button>
        </li>
      );
    }

    return [
      <li className="navbar__item" key={1}>
        <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
      </li>,
      <li className="navbar__item" key={2}>
        <NavLink to="/signin" activeClassName="active">Sign In</NavLink>
      </li>,
    ];
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/asdf">Not Found</NavLink>
          </li>
          {this.renderNavbarBasedOnAuthStatus()}
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOutUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

/*
  Need withRouter wrapper from react-router-dom in order to get
  activeClassName styles/routing path to work (with Redux)

  More info: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
  Solved in: https://github.com/ReactTraining/react-router/issues/4638#issuecomment-305306466
 */
export default withRouter(connect(mapStateToProps, { signOutUser })(Navbar));
