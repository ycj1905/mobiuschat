const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const passport = require('passport');
var cors = require('cors')
var FacebookStrategy = require('passport-facebook').Strategy;

const FacebookToken = require('./secret/facebookToken');
// Utils
const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8080;

passport.use(new FacebookStrategy({
    clientID: FacebookToken.clientID,
    clientSecret: FacebookToken.clientSecret,
    // callbackURL: "http://localhost:3000/auth/facebook/callback"
    callbackURL: FacebookToken.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(accessToken);
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

var app = express();
app.use(cors())

var server = http.createServer(app);
var io = socketIO(server);
// var users = new Users();

app.use(express.static(publicPath));
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});



io.on('connection', (socket) => {
  console.log('New user connected: ', socket);

  // socket.on('join', (params, callback) => {
  //   // console.log('join: ', params);
  //   if (!isRealString(params.name) || !isRealString(params.room)) {
  //     return callback('Name and room name are required.');
  //   }

  //   socket.join(params.room);
  //   users.removeUser(socket.id);
  //   users.addUser(socket.id, params.name, params.room);
  //   // console.log(socket.id)

  //   io.to(params.room).emit('updateUserList', users.getUserList(params.room));
  //   socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
  //   socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));
  //   callback();
  // });

  // socket.on('createMessage', (message, callback) => {
  //   console.log('message: ', message)
  //   var user = users.getUser(socket.id);

  //   console.log('user: ', user);
  //   if (user && isRealString(message.text)) {
  //     io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
  //   }

  //   callback();
  // });

  // socket.on('createLocationMessage', (coords) => {
  //   var user = users.getUser(socket.id);

  //   if (user) {
  //     io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));  
  //   }
  // });

  socket.on('disconnect', () => {
  //   var user = users.removeUser(socket.id);

  //   if (user) {
  //     io.to(user.room).emit('updateUserList', users.getUserList(user.room));
  //     io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left.`));
  //   }
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
