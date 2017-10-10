/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const LocalStrategy = require('passport-local');
const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const User = require('./../user/user.model');

const localLoginOptions = { usernameField: 'email' };

const passportLocalLogin = new LocalStrategy(localLoginOptions, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'Email dosn`t exist.' });
    }

    const doPasswordsMatch = await user.comparePassword(password);
    if (!doPasswordsMatch) {
      return done(null, false, { message: 'Incorrect Password' });
    }

    return done(null, user);
  } catch (error) {
    return done(null, false, { mesage: error });
  }
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader('authorization'),
  secretOrKey: process.env.secretOrKey,
};

const passportJWTStrategy = new JWTStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload._id);
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
});

passport.use(passportLocalLogin);
passport.use(passportJWTStrategy);

exports.localLogin = passport.authenticate('local', { session: false });
exports.requireAuthToken = passport.authenticate('jwt', { session: false });

// We need to serialize and deserialize the user since we are not using sessions.
// passport.serializeUser((user, done) => done(null, user._id));
// passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)));
