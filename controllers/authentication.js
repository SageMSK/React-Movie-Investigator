const jwt = require('jwt-simple'),
      User = require('../models/user'),
      config = require('../config');

function tokenForUser(userModel) {
  const timestamp = new Date().getTime();
  return jwt.encode({
    sub: userModel.id,
    iat: timestamp
  }, config.secret);
}

exports.signin = function (req, res, next) {
  // User is logged in and need to return a token to the user
  res.send({
    token: tokenForUser(req.user)
  });
}

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // Check for both inputs
  if (!email || !password) {
    res.status(422).send({ error: 'Please provide both information.'});
  }

  // Check if user exists
  User.findOne({ email }, function (err, existingUser) {
    if (err) { return next(err); }

    if (existingUser) {
      res.status(422).send({ error: 'This Email is already used.' });
    }

    // If user doesn't exist, create one
    const user = new User({ email, password });

    user.save(function (err) {
      if (err) { return next(err); }

      res.json({ token: tokenForUser(user) });
    });
  });
}