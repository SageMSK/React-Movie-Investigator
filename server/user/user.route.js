const express = require('express');

const userRouter = express.Router();
const userController = require('./user.controller');
const { localLogin } = require('./../services/passport');
const { validateBody, signUp } = require('./../services/bodyValidation');

userRouter.post('/create', validateBody(signUp), userController.signUp);
userRouter.post('/login', localLogin, userController.signIn);

module.exports = userRouter;
