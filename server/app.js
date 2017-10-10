const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const errorHandlers = require('./services/errorHandlers');
const userRoutes = require('./user/user.route');
const movieRoutes = require('./movie/movie.route');

/**
 * MIDDLEWARES
 */
app.use(bodyParser.json()); // make req.body usable by parsing it as JSON
// Parses text as URL encoded data
// (which is how browsers tend to send form data from regular forms set to POST)
// and exposes the resulting object (containing the keys and values) on req.body.
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Setup our HTTP logger
}

// Helmet helps you secure your Express apps by setting various HTTP headers
// for more info: https://github.com/helmetjs/helmet
app.use(helmet());

// Home Route
app.get('/', (req, res) => {
  res.json({ message: 'Server online.' });
});

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/movie', movieRoutes);

// Error Handlers
app.use(errorHandlers.notFound);

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;
