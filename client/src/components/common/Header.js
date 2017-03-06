import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as userActions from './../../actions/userActions';

class Header extends Component {
  logUserOut() {
    this.props.signOutUser();
  }

  renderUserStatus() {
    if (this.props.authenticated) {
      return (
        <li className="dropdown" key={1}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">SETTING <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><Link to="#">ACCOUNT</Link></li>
            <li><Link to="username/movies">YOUR MOVIES</Link></li>
            <li role="separator" className="divider"></li>
            <li><Link to="/" onClick={this.logUserOut.bind(this)} className="sign-out">SIGN-OUT</Link></li>
          </ul>
        </li>
      );
    } else {
      return [
        <li key={2}><Link to="/signin">SIGN-IN</Link></li>,
        <li key={3}><Link to="/signup" className="sign-up">SIGN-UP</Link></li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Movie Investigator</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/movies">MOVIES</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              {this.renderUserStatus()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, userActions)(Header);