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

let SignUp = (props) => {
  const { error, handleSubmit, pristine, reset, submitting, errorMessage } = props;
  const registerUser = (newUser) => props.signUpUser(newUser);
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
    <form onSubmit={handleSubmit(registerUser)} className="form-signin">
      <h2 className="form-signin-heading">Movie Investigator</h2>
      <p className="form-signup-message">Create your Investigator account</p>
      <Field name="email" component={renderField} type="email" label="Email" />
      <Field name="password" component={renderField} type="password" label="Password" />
      {errorAlert()}
      <button className="btn btn-lg btn-primary btn-block" disabled={pristine || submitting} action="submit">Create Your Account</button>

      <hr />
      <p className="form-signup-message"><Link to="/signin">Already Have An Account?</Link></p>
    </form>
  );
};

SignUp = reduxForm({
  form: 'signupform'
})(SignUp);

SignUp = connect(null, userActions)(SignUp);

export default SignUp;