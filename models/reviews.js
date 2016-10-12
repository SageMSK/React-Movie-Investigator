const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: String,
  content: String
});

const reviewClass = mongoose.model('review', reviewSchema);

module.exports = reviewClass;