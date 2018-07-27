const express = require("express");
const http = require("http");
const socket = require("socket.io");
const port = 8000;
const app = express();
const server = http.createServer();
const io = socket(server);

const types = require("./types.js");

// import Game from "./game.js";
const Game = require('./game.js');
const game = new Game();

io.on("connection", socket => {
  console.log("client connected, id: ", socket.id);

  socket.on(types.ADD_PLAYER, payload => {
    game.addPlayer(payload.name, payload.role);
    io.sockets.emit('UPDATE_PLAYERS', game.getPlayers());
  });

  socket.on("disconnect", () => {
    console.log("client disconnected, id: ", socket.id);
  });
});

server.listen(port, () => console.log("server listening on port ", port));