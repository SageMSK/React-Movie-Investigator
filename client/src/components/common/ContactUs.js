import React from 'react';
import { Link } from 'react-router';

const ContactUs = (props) => {
  return (
    <div className="container" id="contact-us">
      <div className="row">
        <div className="col-md-12">
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="row">
        <h2>Contact Us</h2>
        <hr/>
        <div className="col-md-8 contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input name="email" type="email" placeholder="johndoe@ex.com" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input name="name" type="text" placeholder="Ex. John Doe" className="form-control" />
            </div>

            <textarea name="info" id="form-response" rows="10" placeholder="response" className="form-control"></textarea>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
        <div className="col-md-4 contact-info">
          <h3>Address</h3>
          <p>8th Avenue and West 31st Street</p>
          <p>Pennsylvania Station</p>
          <p>New York, NY 10001</p>

          <h3>Phone</h3>
          <p>(123) 456 - 7891</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;