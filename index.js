const express = require('express'),
      http = require('http'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      mongoose = require('mongoose'),
      cors = require('cors');

// DB Setup
// MongoDB/Mongoose on Windows 7
// cd C:\Program Files\MongoDB\Server\3.2\bin
// mongod.exe --dbpath C:\Users\minsookim\Desktop\blogApp\server\data
// mongoose.connect('mongodb://localhost:movieReviewBlog/movieReviewBlog');
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection Error: '));
// db.once('open', () => {
//   console.log('Connected to MongoDB server!');
// });

// App Setup | Middlewares
const app = express();
const router = require('./routes');
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server listening on: ${port}`);
});