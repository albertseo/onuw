const express = require("express");
const http = require("http");
const socket = require("socket.io");

const port = 8000;
const app = express();
const server = http.createServer();
const io = socket(server);

var history = [];

io.on("connection", socket => {
  console.log("client connected, id: ", socket.id);

  socket.on("ADD_PLAYER", payload => {
    console.log("adding new player");
  });

  socket.on("colorChangeGlobal", color => {
      console.log('color changed to ', color);
      history.push(color);
      io.sockets.emit('colorChange', color);
  });

  socket.on('getHistory', () => {
      console.log('get history');
      socket.emit('retHistory', history);
  });

  socket.on("disconnect", () => {
    console.log("client disconnected, id: ", socket.id);
  });
});

server.listen(port, () => console.log("server listening on port ", port));
