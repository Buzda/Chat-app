const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  // socket.emit('newEmail', {
  //   from: 'Ahmed',
  //   text: 'what is going on?',
  //   careatedAt: 2323
  // });
  //
  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });

  socket.emit('newMessage', {
    from: 'Ahmed',
    text: 'what is going on?',
    careatedAt: 2323
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});

// app.get('/me', (req, res) => {
//   res.render('./../public/index.html');
// });

server.listen(port, () => {
  console.log(`started on port ${port}`);
});
