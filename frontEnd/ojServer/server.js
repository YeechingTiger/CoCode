var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");
var http = require('http');

var socketIo = require('socket.io');
var io = socketIo();
var editorSocketService = require('./services/socketService.js')(io);

mongoose.connect("mongodb://user:168198@ds129024.mlab.com:29024/cocode");
app.use(express.static(path.join(__dirname, '../public')));
app.use("/api/v1", restRouter);
app.use('/', indexRouter);

var server = http.createServer(app);
io.attach(server);
server.listen(3000);

server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    throw error;
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe' + addr
        : 'port' + addr.port;
    console.log ('Listening on' + bind);
}