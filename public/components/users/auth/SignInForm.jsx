import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signInUser } from './../../../actions/userAuthActions';

const renderField = field => (
  <div className="form__field">
    <label htmlFor={field.label}>{field.label}</label>
    <input
      type={field.type}
      {...field.input}
    />
  </div>
);

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.signInUser(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Sign In</h3>

        <div>
          <Field
            label="Email"
            type="email"
            name="email"
            component={renderField}
          />

          <Field
            label="Password"
            type="password"
            name="password"
            component={renderField}
          />

          <button type="submit">Sign In</button>

          <hr className="form__underline" />

          <Link to="/signup" className="form__footer">
            Don`t have an account? Create Your Free Account
          </Link>
        </div>
      </form>
    );
  }
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'SignInForm',
})(connect(null, { signInUser })(SignInForm));
