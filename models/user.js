const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt-nodejs');

// User Model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
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