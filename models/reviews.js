const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
    trim: true
  },
  score: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  review: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const ReviewModel = mongoose.model('review', ReviewSchema);

module.exports = ReviewModel;