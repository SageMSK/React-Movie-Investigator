import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {
  renderUserStatus() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link className="item-link" to="/signedout">Sign Out</Link>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <Link className="item-link" to="/signin">Sign In</Link>
        </li>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Movie Investigator</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <Link className="item-link" to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="item-link" to="/about">About</Link>
              </li>
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

export default connect(mapStateToProps)(Header);