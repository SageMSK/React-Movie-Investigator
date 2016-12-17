import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as reviewActions from '../../actions/reviewActions';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input className="form-control" placeholder={label} type={type} {...input} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const scoreField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input type={type} className="form-control" placeholder="Input a score between 1 - 10" min="1" max="10" {...input} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const reviewField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <textarea type={type} className="form-control" placeholder="Write your review here." {...input} rows="10"></textarea>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);


let CreateNewMovieReview = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props;

  const createNewReviewPost = function (newReview) {
    props.createNewReview(newReview);
  }

  return (
    <form onSubmit={handleSubmit(createNewReviewPost)}>
      <Field name="title" component={renderField} type="text" label="Title" />
      <Field name="score" component={scoreField} type="number" label="Score" />
      <Field name="review" component={reviewField} type="textarea" label="Review" />

      <button className="btn btn-primary" disabled={pristine || submitting} action="submit">Submit</button>
      <button className="btn btn-default" disabled={pristine || submitting} type="button" onClick={reset}>Clear</button>
    </form>
  )
}

CreateNewMovieReview = reduxForm({
  form: 'newreviewform'
})(CreateNewMovieReview);

CreateNewMovieReview = connect(
  null,
  reviewActions
)(CreateNewMovieReview);

export default CreateNewMovieReview;