module.exports = (io) => {
    io.on('connection', (socket) => {
        // console.log('New user connected: ', socket);
        console.log('connect');
      
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
}