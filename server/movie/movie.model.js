const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

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
  rating: {
    type: Number,
    required: [true, 'Please give a rating'],
  },
  comment: {
    type: String,
    trim: true,
  },
  rewatch: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true, // adds createdAt and updatedAt
});

// Plugins
MovieSchema.plugin(uniqueValidator, { message: '{VALUE} is already taken.' });

// Pre/Post

module.exports = mongoose.model('Movie', MovieSchema);
