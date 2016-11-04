const express = require('express'),
      Reviews = require('../models/reviews'),
      mongoose = require('mongoose'),
      assert = require('assert'),
      passport = require('passport'),
      passportService = require('../services/passport');

const movieReviewRouter = express.Router();
const requireSignIn = passport.authenticate('local', { session: false });

movieReviewRouter.get('/', (req, res, next) => {

  Reviews.find({}, (err, movieReviews) => {
    assert.equal(null, err);

    res.json(movieReviews);
  });

});

movieReviewRouter.post('/', (req, res, next) => {

  Reviews.save(req.body, (err, movieReview) => {
    assert.equal(null, err);

    let id = movieReview._id;
    console.log('Created movie Review:', id);
  });

});

movieReviewRouter.delete('/', (req, res, next) => {

  Reviews.remove({}, (err, removedReviews) => {
    assert.equal(null, err);
    res.json(removedReviews);
  });

});

module.exports = movieReviewRouter;