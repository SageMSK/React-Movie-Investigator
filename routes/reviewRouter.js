const express = require('express'),
      Reviews = require('../models/reviews'),
      mongoose = require('mongoose'),
      assert = require('assert'),
      passport = require('passport'),
      passportService = require('../services/passport');

const movieReviewRouter = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

movieReviewRouter.get('/', (req, res, next) => {

  Reviews.find({}, (err, movieReviews) => {
    assert.equal(null, err);

    res.json(movieReviews);
  });

});

movieReviewRouter.post('/', (req, res, next) => {

  Reviews.create(req.body, (err, movieReview) => {
    assert.equal(null, err);

    let id = movieReview._id;
    res.end(`Movie review created with id: ${id}`);
  });

});

movieReviewRouter.delete('/', (req, res, next) => {

  Reviews.remove({}, (err, removedReviews) => {
    assert.equal(null, err);
    res.json(removedReviews);
  });

});

movieReviewRouter.route('/:movieId')
.get((req, res, next) => {

  Reviews.findById(req.params.movieId, (err, movieReview) => {
    assert.equal(null, err);
    res.json(movieReview);
  });

})

.put((req, res, next) => {

  Reviews.findByIdAndUpdate(
    req.params.movieId,
    { $set: req.body },
    { new: true },
    (err, movieReview) => {
      assert.equal(null, err);

      res.json(movieReview);
    });

})

.delete((req, res, next) => {

  Reviews.remove({ _id: req.params.movieId }, (err, removedReview) => {
    assert.equal(null, err);
    res.json(removedReview);
    res.end(`Removed movie review with id: ${req.params.movieId}`)
  });

})

module.exports = movieReviewRouter;