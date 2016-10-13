const express = require('express'),
      User = require('../models/user'),
      Authentication = require('../controllers/Authentication'),
      passport = require('passport'),
      passportService = require('../services/passport');

const userRouter = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

userRouter.get('/', requireAuth, (req, res, next) => {
  res.send({ message: 'This should work' });
});

userRouter.post('/signin', requireSignIn, Authentication.signin);

userRouter.post('/signup', Authentication.signup);

// Export userRouter
module.exports = userRouter;