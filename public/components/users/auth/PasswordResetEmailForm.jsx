/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendPasswordResetEmail } from './../../../actions/userAuthActions';

const renderField = (field) => {
  const { meta: { touched, error } } = field;

  return (
    <div className="form__field">
      <label htmlFor={field.labelfor}>{field.label}</label>
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

class PasswordResetEmailForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(email) {
    this.props.sendPasswordResetEmail(email);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
        <h2>Reset your password</h2>
        <div>
          <p>
            Please enter the email you registered with and we will send you a password reset email.
          </p>

          <Field
            label="Email"
            labelfor="email"
            type="email"
            name="email"
            component={renderField}
          />

          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}

PasswordResetEmailForm.propTypes = {
  sendPasswordResetEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// Form Validation
function validate(formValue) {
  const errors = {};

  if (!formValue.email) {
    errors.email = 'Please enter your email.';
  }

  return errors;
}

export default reduxForm({
  form: 'ResetPasswordForm',
  validate,
})(connect(null, { sendPasswordResetEmail })(PasswordResetEmailForm));
