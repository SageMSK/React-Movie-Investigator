import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as userActions from './../../actions/userActions';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="sr-only">{label}</label>
    <div>
      <input className="form-control" placeholder={label} type={type} {...input} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let SignIn = (props) => {
  const { error, handleSubmit, pristine, submitting, errorMessage } = props;
  const LogInUser = (userInfo) => props.signInUser(userInfo);
  const errorAlert = () => {
    if (errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>{errorMessage}</strong>
        </div>
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(LogInUser)} className="form-signin">
      <h2 className="form-signin-heading">Movie Investigator</h2>
      <Field name="email" component={renderField} type="email" label="Email" />
      <Field name="password" component={renderField} type="password" label="Password" />
      {errorAlert()}
      <button className="btn btn-lg btn-primary btn-block" disabled={pristine || submitting} action="submit">Log In</button>

      <hr />
      <p className="form-bottom-message">Don't have an account? <Link to="/signup">Create Your Free Account</Link></p>
    </form>
  );
}

SignIn = reduxForm({
  form: 'signinform'
})(SignIn);

SignIn = connect(null, userActions)(SignIn);

export default SignIn;