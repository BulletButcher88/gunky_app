var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.is')(server);

server.listen(300)
    // https://socket.io/docs/