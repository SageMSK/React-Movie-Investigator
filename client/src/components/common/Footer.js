import React from 'react';

const Footer = (props) => {
  let currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <div className="social-media">
          <p>FOLLOW US ON</p>
            <ul className="social-media-list">
              <li><a href="https://www.facebook.com/" className="facebook"><i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com" className="twitter"><i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/" className="instagram"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
            </ul>
        </div>

        <hr />
        <p className="copyright">&copy; {currentYear} Movie Investigator, MSK</p>
      </div>
    </footer>
  );
};

export default Footer;