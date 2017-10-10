/* eslint-disable no-console */

exports.notFound = (req, res) => {
  // Non-JSON response
  const err = new Error('Not Found');
  err.status = 404;
  // next(err);

  // JSON response
  res.status(404).json({ message: 'Not Found', status: 404 });
};

exports.developmentErrors = (err, req, res) => {
  console.log('Development Errors:', err.stack);
  const errorDetails = {
    message: err.message,
    error: err,
  };
  res.status(err.status || 500);
  res.json(errorDetails);
};

// don't show stack to users
exports.productionErrors = (err, req, res) => {
  const errorDetails = {
    message: err.message,
    error: {},
  };
  res.status(err.status || 500);
  res.json(errorDetails);
};
