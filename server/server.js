const path = require('path');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const cors = require('cors')
require('./services/passport');

const port = process.env.PORT || 8080;
require('./models/User'); 
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const app = express();
app.use(cors())

const server = http.createServer(app);
const io = socketIO(server);

require('./routes/authRoutes')(app);
require('./socket/chatroom')(io);

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
