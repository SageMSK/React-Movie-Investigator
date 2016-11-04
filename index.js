const express = require('express'),
      http = require('http'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      mongoose = require('mongoose'),
      cors = require('cors');

const app = express();
const userRouter = require('./routes/userRouter');
const reviewRouter = require('./routes/reviewRouter');

// DB Setup
// MongoDB/Mongoose on Windows 7
// cd C:\Program Files\MongoDB\Server\3.2\bin
// mongod.exe --dbpath C:\Users\minsookim\Desktop\blogApp\data
mongoose.connect('mongodb://localhost:movieblog/movieblog');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => {
  console.log('Connected to MongoDB server!');
});

// App Setup | Middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

// Routers
app.use('/', userRouter);
app.use('/movies', reviewRouter);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server listening on: ${port}`);
});