const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const slug = require('slug');

const { Schema } = mongoose;

const MovieSchema = new Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Please enter a title'],
  },
  slug: {
    type: String,
  },
  author: {
    type: String,
    default: 'Bob',
  },
  rating: {
    type: Number,
    required: [true, 'Please give a rating'],
  },
  comment: {
    type: String,
    trim: true,
  },
  dateWatched: {
    type: Date,
  },
}, {
  timestamps: true, // adds createdAt and updatedAt
});

// Clearer error message for schema values with unique keys set to true
MovieSchema.plugin(uniqueValidator, { message: '{VALUE} is already taken.' });

// Make this change before this is saved
MovieSchema.pre('save', function slugify(next) {
  const movie = this;

  // if the movie name has not changed, then skip it
  if (!movie.isModified('title')) return next();

  // create new slug
  movie.slug = slug(movie.title);
  return next();
});

module.exports = mongoose.model('Movie', MovieSchema);
