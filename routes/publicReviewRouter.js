const express = require('express');
const _ = require('lodash');
const { ObjectID } = require('mongodb');

const publicReviewRouter = express.Router();
const Review = require('./../models/review');

publicReviewRouter.get('/', (req, res) => {

  Review.find().then(reviews => {
    res.json(reviews);
  }).catch(err => res.status(400).json(err));

});

publicReviewRouter.get('/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).json({ message: "Invalid movie review id" });
  }

  Review.findById({ _id: id }).then(review => {
    if (!review) {
      res.status(404).json({ message: "Unable to find review" });
    }

    res.json(review);
  }).catch(err => res.status(400).json(err));

});

module.exports = publicReviewRouter;