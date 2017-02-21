import React from 'react';

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <hr />
        <p className="footer-text">&copy; {currentYear} Movie Investigator, created by MSK</p>
      </div>
    </footer>
  );
}

export default Footer;