const Joi = require('joi');

exports.validateBody = schema => (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).json(result.error);
  }
  return next();
};

exports.signUp = Joi.object().options({ abortEarly: false }).keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirm_password: Joi.string().min(6).required(),
});

exports.createMovie = Joi.object().options({ abortEarly: false }).keys({
  title: Joi.string().required(),
  rating: Joi.number().required(),
});

exports.passwordResetEmail = Joi.object().keys({
  email: Joi.string().email().required(),
});
