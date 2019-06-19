const express = require('express');
const server = express();
port = 3000;

server.listen(3000, () => console.log(`Listening on port ${port}...`))

// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.is')(server);

// server.listen(300)
//     // https://socket.io/docs/