const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

// Utils
const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8080;
var app = express();
// app.get('/', (req, res) => {
//   res.send('hello')
//   // Todo.find().then((todos) => {
//   //   res.send({todos});
//   // }, (e) => {
//   //   res.status(400).send(e);
//   // });
// });


var server = http.createServer(app);
var io = socketIO(server);
// var users = new Users();

app.use(express.static(publicPath));

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
