const User = require('./user.model');

exports.signUp = async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(201).json(user.sentTokenToClient());
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.signIn = (req, res) => {
  res.status(200).json(req.user.sentTokenToClient());
};
