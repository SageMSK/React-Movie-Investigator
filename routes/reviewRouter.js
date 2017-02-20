const express = require('express');
const _ = require('lodash');
const { ObjectID } = require('mongodb');

const usersMovieReviewRouter = express.Router();
const Review = require('../models/review');
const authenticate = require('./../services/authenticate');

usersMovieReviewRouter.post('/', authenticate, (req, res) => {
  let review = new Review({
    title: req.body.title,
    score: req.body.score,
    review: req.body.review,
    _creator: req.user._id
  });

  review.save().then(movieReview => {
    res.json(movieReview);
  }).catch(err => res.status(400).json(err));
});

usersMovieReviewRouter.get('/', authenticate, (req, res) => {
  Review.find({ _creator: req.user._id }).then(reviews => {
    res.json(reviews);
  }).catch(err => res.status(400).json(err));
});

usersMovieReviewRouter.get('/:id', authenticate, (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(400).json({ message: "Review ID is not valid. Please input the correct ID." });
  }

  Review.findOne({ _id: id, _creator: req.user._id }).then(review => {
    if (!review) {
      res.status(404).json({ message: "Unable to find movie review."});
    }

    res.json(review);
  }).catch(err => res.status(400).json(err));
});

usersMovieReviewRouter.delete('/:id', authenticate, (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).json({ message: "Review ID is not valid. Please input the correct ID"});
  }

  Review.findOneAndRemove({ _id: id, _creator: req.user._id }).then(review => {
    if (!review) {
      return res.status(404).json({ message: "Review doesn't exist" });
    }

    res.json({ review, message: "Review was successfully deleted" });
  }).catch(err => res.status(400).json(err));
});

module.exports = usersMovieReviewRouter;