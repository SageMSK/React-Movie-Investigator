import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>Welcome!</h1>
            <p>Start Reading!</p>
            <p><Link className="btn btn-primary btn-lg" to="/movies">Reviews &raquo;</Link></p>
          </div>
        </div>

        <div className="container three-info">
          <div className="row">
            <h2 className="three-info-title">Our Mission</h2>
            <div className="col-md-4">
              <i className="fa fa-handshake-o fa-5x" aria-hidden="true"></i>
              <h2 className="three-info-individual-title">Honesty</h2>
              <p>No sponsors or influences! We are a small group of reviewers. All reviews are our geniune views of the movies.</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-search fa-5x" aria-hidden="true"></i>
              <h2 className="three-info-individual-title">Thorough</h2>
              <p>All our star reviewers have watched the movie at least two times. Any movies of series have been thoroughly watched as well.</p>
           </div>
            <div className="col-md-4">
              <i className="fa fa-calendar fa-5x" aria-hidden="true"></i>
              <h2 className="three-info-individual-title">Up to Date</h2>
              <p>As we are movie lovers, we are always eager to watch major release movies on the night of or the day after.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;