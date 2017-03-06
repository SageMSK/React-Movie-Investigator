import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div id="home-page">
        <div className="background-picture">
          <div className="background-color">
            <div className="container">
              <div className="message text-center">
                <h2>GENUINE & QUALITY</h2>
              </div>
              <Link className="btn" to="/movies">Start Reading</Link>
            </div> 
          </div>
        </div>

        <div id="reviews" className="container three-info">
          <div className="row">
            <h2 className="row-title">Our Reviews</h2>
            <hr className="bottom-line" />
            <div className="col-md-4">
              <i className="fa fa-handshake-o fa-5x" aria-hidden="true"></i>
              <h3 className="three-info-individual-title">Honesty</h3>
              <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
            </div>
            <div className="col-md-4">
              <i className="fa fa-search fa-5x" aria-hidden="true"></i>
              <h3 className="three-info-individual-title">Thorough</h3>
              <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
           </div>
            <div className="col-md-4">
              <i className="fa fa-calendar fa-5x" aria-hidden="true"></i>
              <h3 className="three-info-individual-title">Up to Date</h3>
              <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
            </div>
          </div>
        </div>

        <div id="critics" className="reviewer-info">
          <div className="container">
            <div className="row">
              <h2 className="row-title">Our Top Critics</h2>
              <hr className="bottom-line" />
              <div className="col-md-4">
                <img src="./../../img/user1.png" alt="user icon" className="user-picture" />
                <h3 className="reviewer-individual-name">John Doe</h3>
                <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
              </div>
              <div className="col-md-4">
                <img src="./../../img/user2.png" alt="user icon" className="user-picture" />
                <h3 className="reviewer-individual-name">Jane Smith</h3>
                <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
             </div>
              <div className="col-md-4">
                <img src="./../../img/user1.png" alt="user icon" className="user-picture" />
                <h3 className="reviewer-individual-name">Ricky Bobby</h3>
                <p>Donec et lectus bibendum dolor dictum auctor in ac erat. Vestibulum egestas sollicitudin metus non urna in eros tincidunt convallis id id nisi in interdum.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="user-response">
          <div className="container">
            <div className="row">
              <h2 className="row-title">See What Our Users Are Saying!</h2>
              <hr className="bottom-line" />
              <div className="col-md-6">
                <div className="comment-box">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam accusamus iste voluptas eaque rem, odit praesentium voluptatem voluptate reprehenderit possimus libero aut dolorum hic voluptates earum fugiat officia ducimus nihil.</p>
                  <p>Adam West - User</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="comment-box">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi beatae expedita quibusdam quo sunt facere adipisci fugiat temporibus provident, enim magnam reprehenderit voluptates eligendi laborum rem laudantium nemo cum sapiente!</p>
                  <p>Adam Jensen - User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;