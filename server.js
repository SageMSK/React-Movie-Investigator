/* eslint-disable no-console */
const mongoose = require('mongoose');

const app = require('./server/app');

// Import our local environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

/**
 * MongoDB/Mongoose Config
 * For Local
 *  set DATABASE to mongodb://localhost:27017/movietrackingapp in variables.env
 */
mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise; // Use native ES6 promises

mongoose.connection
  .once('open', () => console.log('MongoDB Sucessfully Running.'))
  .on('error', (err) => { throw err; });

// Starting our server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Express App successfully running on port: ${server.address().port}`);
});
