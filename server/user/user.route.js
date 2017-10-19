const express = require('express');

const userRouter = express.Router();
const userController = require('./user.controller');
const userResetEmailController = require('./user.resetEmail');
const { localLogin } = require('./../services/passport');
const { validateBody, signUp, passwordResetEmail } = require('./../services/bodyValidation');

userRouter.post('/signup', validateBody(signUp), userController.signUp);
userRouter.post('/signin', localLogin, userController.signIn);

// password update
userRouter.post('/passwordreset', validateBody(passwordResetEmail), userResetEmailController.sendPasswordResetEmail);
userRouter.post('/updatenewpassword/:passwordResetToken', userResetEmailController.updateNewPassword);

module.exports = userRouter;
