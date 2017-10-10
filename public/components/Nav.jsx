import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function Nav() {
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
      </ul>
    </nav>
  );
}

/*
  Need withRouter wrapper from react-router-dom in order to get
  activeClassName styles/routing path to work (with Redux)

  More info: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
  Solved in: https://github.com/ReactTraining/react-router/issues/4638#issuecomment-305306466
 */
export default withRouter(Nav);
