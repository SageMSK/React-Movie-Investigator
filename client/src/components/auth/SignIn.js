import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../../actions';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <fieldset className="form-group">
    <label>{label}</label>
    <input type={type} className="form-control" placeholder={label} {...input} />
    {touched && error && <span>{error}</span>}
  </fieldset>
);

let SignIn = (props) => {
  const { error, handleSubmit, pristine, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" component={renderField} type="email" label="Email" />
      <Field name="password" component={renderField} type="password" label="Password" />

      <button className="btn btn-primary" action="submit" disabled={pristine || submitting}>LOG IN</button>
    </form>
  );
}

SignIn = reduxForm({
  form: 'signinform'
})(SignIn);

// SignIn = connect({
//   null,
//   actions
// })(SignIn);

export default SignIn;