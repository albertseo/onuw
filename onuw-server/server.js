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
    if (payload === "Night") {
      game.generateRoles(); // Generate roles for each player
    }
    io.sockets.emit(types.UPDATE_GAMEPHASE, game.getGamePhase());
  });

  socket.on(types.MAJORITY_ADD, payload => {
    game.setMajorityNum(game.getMajorityNum() + 1);
    io.sockets.emit(types.UPDATE_MAJORITY, game.getMajorityNum());
    if (game.getMajorityNum() >= game.getNumPlayers()) {
      io.sockets.emit(types.UPDATE_MAJORITY_READY, true);
    }
  });

  socket.on(types.MAJORITY_RESET, payload => {
    game.setMajorityNum(0);
    io.sockets.emit(types.UPDATE_MAJORITY, game.getMajorityNum());
    io.sockets.emit(types.UPDATE_MAJORITY_READY, false);
  });

  socket.on(types.ROLE_TOGGLE, payload => {
    game.roleToggle(payload);
    io.sockets.emit(types.UPDATE_ALL_ROLES, game.getAllRoles());
  });

  // When the performs an action, update the server
  socket.on(types.PLAYER_ACTION, payload => {
    game.playerNightAction(payload.player, payload.action);
  });

  socket.on("disconnect", () => {
    console.log("client disconnected, id: ", socket.id);
  });
});

server.listen(port, () => console.log("server listening on port ", port));