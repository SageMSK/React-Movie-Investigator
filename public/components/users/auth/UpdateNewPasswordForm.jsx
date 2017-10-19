/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateNewPassword } from './../../../actions/userAuthActions';

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

class UpdateNewPasswordForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(password) {
    // we need to send the token with it
    // set token with the password object
    this.props.updateNewPassword(password);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
        <h2>Enter your new password</h2>

        <div>
          <Field
            label="Password"
            labelfor="password"
            type="password"
            name="password"
            placeholder="Must be at least 6 characters"
            component={renderField}
          />
          <Field
            label="Confirm Password"
            labelfor="confirm_password"
            type="password"
            name="confirm_password"
            component={renderField}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

UpdateNewPasswordForm.propTypes = {
  updateNewPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// Form Validation
function validate(formValues) {
  const errors = {};

  if (!formValues.password) {
    errors.password = 'Please enter your new password';
  }

  if (formValues.password && formValues.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (formValues.password !== formValues.confirm_password) {
    errors.confirm_password = 'Passwords don`t match';
  }

  return errors;
}

export default reduxForm({
  form: 'UpdatePasswordForm',
  validate,
})(connect(null, { updateNewPassword })(UpdateNewPasswordForm));
