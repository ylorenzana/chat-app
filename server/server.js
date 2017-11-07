const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat room'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined chat room'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('From server');
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
