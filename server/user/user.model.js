/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'Please enter an email'],
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: '{VALUE} is not a valid email.',
    },
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    minlength: [6, 'Password needs to be at least 6 characters.'],
    required: [true, 'Password required'],
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
}, {
  timestamps: true, // adds createdAt and updatedAt
});

// Clearer error message for schema values with unique keys set to true
UserSchema.plugin(uniqueValidator, { message: '{VALUE} is already taken.' });

// Hash our password before saving user to database
UserSchema.pre('save', async function bycryptPassword(next) {
  const user = this;
  const SALT_FACTOR = 10;

  // if the password did not change, then skip it
  if (!user.isModified('password')) return next();

  try {
    // Generate the salt
    const salt = await bcrypt.genSalt(SALT_FACTOR);
    // Hash the password using the salt we just created
    const hashedPassword = await bcrypt.hash(user.password, salt);
    // Replace the string password with the hashed one
    user.password = hashedPassword;

    return next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods = {
  async comparePassword(candidatePassword) {
    try {
      return await bcrypt.compare(candidatePassword, this.password); // returns a boolean
    } catch (error) {
      throw new Error(error);
    }
  },
  createToken() {
    // sign with default (HMAC SHA256)
    return jwt.sign({
      _id: this._id,
      test: 'test',
    }, process.env.SECRET);
  },
  sentTokenToClient() {
    return {
      _id: this._id,
      token: this.createToken(),
    };
  },
};

module.exports = mongoose.model('User', UserSchema);
