const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

require('./models/User'); 

const socketIO = require('socket.io');
const passport = require('passport');
const cors = require('cors')
require('./services/passport');

const port = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const app = express();
app.use(cors())
app.use(bodyParser.json());
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: ['123d4']
//   })
// );
app.use(passport.initialize());
// app.use(passport.session());

const server = http.createServer(app);
const io = socketIO(server);

require('./routes/authRoutes')(app);
require('./routes/user')(app);
require('./socket/chatroom')(io);

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
