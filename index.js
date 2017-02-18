require('./config/config.js');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

const userRouter = require('./routes/userRouter');
const reviewRouter = require('./routes/reviewRouter');

// App Setup | Middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
// app.use(cors());

// Routers
app.use('/user', userRouter);
app.use('/movies', reviewRouter);

// DB Setup
// MongoDB/Mongoose on Windows 7
// cd C:\Program Files\MongoDB\Server\3.2\bin
// mongod.exe --dbpath C:\Users\minsookim\Desktop\blogApp\data
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => {
  console.log('Connected to MongoDB server!');
});

// Server Listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

module.exports = {app};