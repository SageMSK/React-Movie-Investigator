const User = require('./../models/user');

const authenticate = (req, res, next) => {
  let token = req.header('x-auth');

  User.findByToken(token).then(user => {
    if (!user) {
      return Promise.reject({
        // Have token but unable to find user because the token has been removed/expired
        message: "Unable to find user's token. Please sign in."
      });
    }

    req.user = user;
    req.token = token;
    next();
  }).catch(err => res.status(401).json(err));
}

module.exports = authenticate;