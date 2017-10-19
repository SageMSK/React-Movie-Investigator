const crypto = require('crypto');

const User = require('./user.model');
const mail = require('./../services/nodemailer');

exports.sendPasswordResetEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'No account with that email exists' });
    }

    // Set reset token and expired date on their account of 1 hour
    user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now (in ms)

    // save the user so the reset password values are saved
    await user.save();

    // not the server host but the client host
    const resetURL = `http://localhost:8080/update_new_password/${user.resetPasswordToken}`;

    // Setup the email options
    await mail.sendPasswordResetEmail({
      user,
      filename: 'resetPasswordEmail',
      subject: 'Password Reset',
      resetURL,
    });

    return res.status(200).json({ message: 'Email sent.' });
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateNewPassword = async (req, res) => {
  try {
    // Find the user with matching token and a non-expired token
    const resetToken = req.params.passwordResetToken;

    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(403).json({ message: 'Password reset link is invalid or has expired.' });
    }

    // set new password
    user.password = req.body.password;

    // In MongoDB, to remove fields we set them to undefined
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    // update and save
    const userWithUpdatedPassword = await user.save();

    return res.status(200).json({ message: 'Your account has been updated.', token: userWithUpdatedPassword.createToken() });
  } catch (error) {
    return res.status(400).json(error);
  }
};
