const User = require('./user.model');

exports.signUp = async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(201).json(user.sentTokenToClient());
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.signIn = (req, res) => {
  res.status(200).json(req.user.sentTokenToClient());
};
