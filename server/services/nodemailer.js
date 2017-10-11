const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');
const promisify = require('es6-promisify');
const pug = require('pug');
const juice = require('juice');

// create reusble transporter object using the defaultl SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// generate a HTML file from email template pug file
const generateHTML = (filename, options = {}) => {
  const html = pug.renderFile(`${__dirname}/email-templates/passwordResetEmail/${filename}.pug`, options);
  return juice(html); // juice will make the html email inlined
};

exports.sendPasswordResetEmail = (options) => {
  const html = generateHTML(options.filename, options);
  const htmlText = htmlToText.fromString(html);

  const mailOptions = {
    from: 'MovieTracking Support <noreply@movietracking.com>', // sender
    to: options.user.email, // receiver
    subject: options.subject,
    html, // html template
    htmlText, // plain text body
  };

  // sendMail is a callback, make it into a promise
  const sendMail = promisify(transporter.sendMail, transporter);
  return sendMail(mailOptions);
};
