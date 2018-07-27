const express = require("express");
const http = require("http");
const socket = require("socket.io");
const port = 8000;
const app = express();
const server = http.createServer();
const io = socket(server);

const types = require("./types.js").types;

// import Game from "./game.js";
const Game = require('./game.js');
const game = new Game();

io.on("connection", socket => {
  console.log("client connected, id: ", socket.id);

  // When client connects, add them to the game object and update all clients with new player
  socket.on(types.ADD_PLAYER, payload => {
    game.addPlayer(payload.name, payload.role);
    io.sockets.emit(types.UPDATE_PLAYERS, game.getPlayers());
  });

  // When the client advances gamephase, update server game and all clients with new gamePhase
  socket.on(types.NEW_GAMEPHASE, payload => {
    game.changeGamePhase(payload);
    io.sockets.emit(types.UPDATE_GAMEPHASE, game.getGamePhase());
  });

  socket.on("disconnect", () => {
    console.log("client disconnected, id: ", socket.id);
  });
});

server.listen(port, () => console.log("server listening on port ", port));