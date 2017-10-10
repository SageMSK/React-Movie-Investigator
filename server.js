/* eslint-disable no-console */
const mongoose = require('mongoose');

/**
 * Import our local environmental variables from our variables.env file
 *
 * IMPORTANT: Must import this first to allow the local server to have access
 * to the local environmental variables set before requiring our app file
 * down below
 */
require('dotenv').config({ path: 'variables.env' });

/**
 * MongoDB/Mongoose Config
 * For Local variable, you need to install dotenv and create a file named variables.env
 * and then set DATABASE to mongodb://localhost:27017/movietrackingapp
 * ex. DATABASE=mongodb://localhost:27017/movietrackingapp
 * or just simply replace process.env.DATABASE to your desired name
 * ex. mongodb://localhost:27017/[your desired name here]
 */
mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise; // Use native ES6 promises

mongoose.connection
  .once('open', () => console.log('MongoDB Sucessfully Running.'))
  .on('error', (err) => { throw err; });

// Starting our server
const app = require('./server/app');

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Express App successfully running on port: ${server.address().port}`);
});
