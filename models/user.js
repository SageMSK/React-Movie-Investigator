const mongoose = require('mongoose'),
      bcrypt = require('bcryptjs')
      validator = require('validator'),
      jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: 1,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not valid email.'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

// Encrypt Password
userSchema.pre('save', function (next) {
  const user = this; // access our user model

  // generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) { return next(err); }

    // Hash/Encrypt the password using the salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) { return next(err); }

      // overwrite the text password with hashed pw
      user.password = hash;
      next(); // Go ahead and save the model
    });
  });
});

// Create users method to compare password to log in
userSchema.methods.comparePassword = function (enteredPassword, callback) {
  bcrypt.compare(enteredPassword, this.password, function (err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}

// Create the model class
const UserClass = mongoose.model('user', userSchema);

// Export the model
module.exports = UserClass;