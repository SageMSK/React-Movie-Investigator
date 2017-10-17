import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUser } from './../../../actions/userAuthActions';

const renderField = (field) => {
  const { meta: { touched, error } } = field;

  return (
    <div className="form__field">
      <label htmlFor={field.label}>{field.label}</label>
      <input
        className={touched && error ? 'form__input-error-border' : ''}
        type={field.type}
        placeholder={field.placeholder}
        {...field.input}
      />
      <div className="form__error">
        { touched ? error : '' }
      </div>
    </div>
  );
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    // In the authActions, add a callback promise
    this.props.signUpUser(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Sign Up</h3>

        <div>
          <Field
            label="Email"
            type="email"
            name="email"
            component={renderField}
          />
          <Field
            label="First Name"
            type="text"
            name="firstName"
            component={renderField}
          />
          <Field
            label="Last Name"
            type="text"
            name="lastName"
            component={renderField}
          />
          <Field
            label="Password"
            type="password"
            name="password"
            placeholder="Must be least 6 characters"
            component={renderField}
          />
          <Field
            label="Confirm Password"
            type="password"
            name="confirm_password"
            component={renderField}
          />
          <button className="form__btn" type="submit">Sign Up</button>

          <hr className="form__underline" />
          <Link className="form__footer" to="/signin">Already have an account?</Link>
        </div>
      </form>
    )
  }
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
};

// Redux Form Validation
function validate(formValues) {
  const errors = {};

  if (!formValues.email) {
    errors.email = 'Please enter your email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'Invalid email address';
  }

  if (!formValues.password) {
    errors.password = 'Please enter your password';
  }

  if (formValues.password && formValues.password.length < 6) {
    errors.password = 'Your password must be at least 6 characters';
  }

  if (formValues.confirm_password !== formValues.password) {
    errors.confirm_password = 'Your passwords don\'t match';
  }

  return errors;
}

export default reduxForm({
  form: 'SignUpForm',
  validate,
})(connect(null, { signUpUser })(SignUpForm));
