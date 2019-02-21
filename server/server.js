const path = require('path');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const cookieSession = require('cookie-session');
const cors = require('cors')
const passport = require('passport');
const bodyParser = require('body-parser');
require('./services/passport');

const port = process.env.PORT || 8080;
require('./models/User'); 
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['123d4']
  })
);
app.use(passport.initialize());
app.use(passport.session());

const server = http.createServer(app);
const io = socketIO(server);

require('./routes/authRoutes')(app);
require('./socket/chatroom')(io);

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
