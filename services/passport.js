const passport = require('passport'),
      User = require('../models/user'),
      config = require('../config'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      LocalStrategy = require('passport-local');

// Local Strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  
  // Verify the user
  User.findOne({ email }, function (err, user) {
    if (err) { return done(err); }

    // if user was not found
    if (!user) {
      return done(null, false, { message: 'Incorrect email' });
    }

    // Compare Password. Use the User Schema Method
    user.comparePassword(password, function (err, isMatch) {
      if (err) { return done(err); }

      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    });
  });
});

// Options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  
  // Check if user exist in our DB
  User.findById(payload.sub, function (err, user) {
    if (err) { return done(err, false); }

    if (user) {
      //user exists
      done(null, user);
    } else {
      // search failed
      done(null, false);
    }

  });
});

passport.use(jwtLogin);
passport.use(localLogin);