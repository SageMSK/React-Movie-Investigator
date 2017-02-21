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
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Setting <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Placeholder</a></li>
            <li role="separator" className="divider"></li>
            <li className="dropdown-header">Placeholder</li>
            <li className="sign-out"><a onClick={this.logUserOut.bind(this)}>Sign Out</a></li>
          </ul>
        </li>
      );
    } else {
      return [
        <li key={2}><Link to="/signin">Sign-in</Link></li>,
        <li key={3}><Link to="/signup">Sign-up</Link></li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Movie Investigator</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link className="item-link" to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="item-link" to="/about">About</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
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