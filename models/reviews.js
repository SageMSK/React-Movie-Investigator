const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  score: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  content: String
});

const reviewClass = mongoose.model('review', reviewSchema);

module.exports = reviewClass;