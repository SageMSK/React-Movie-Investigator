const express = require('express');

const userRouter = express.Router();
const userController = require('./user.controller');
const userResetEmailController = require('./user.resetEmail');
const { localLogin } = require('./../services/passport');
const { validateBody, signUp, passwordResetEmail } = require('./../services/bodyValidation');

userRouter.post('/create', validateBody(signUp), userController.signUp);
userRouter.post('/login', localLogin, userController.signIn);

// password update
userRouter.post('/passwordreset', validateBody(passwordResetEmail), userResetEmailController.sendPWResetEmail);
userRouter.post('/updatenewpassword/:token', userResetEmailController.updateNewPassword);

module.exports = userRouter;
