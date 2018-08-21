const express = require("express");
const http = require("http");
const socket = require("socket.io");
const port = 8000;
const app = express();
const server = http.createServer();
const io = socket(server);

const types = require("./types.js").types;

// import Game from "./game.js";
const Game = require("./game.js");
const game = new Game();

io.on("connection", socket => {
  console.log("client connected, id: ", socket.id);

  // When client connects, add them to the game object and update all clients with new player
  socket.on(types.ADD_PLAYER, payload => {
    game.addPlayer(payload.name, payload.role);
    game.addPlayerSocket(payload.name, socket.id);
    io.sockets.emit(types.UPDATE_PLAYERS, game.getPlayers());
  });

  // When the client advances gamephase, update server game and all clients with new gamePhase
  socket.on(types.NEW_GAMEPHASE, payload => {
    game.changeGamePhase(payload);
    switch (payload) {
      case "Night":
        game.setCurrentRoles();
        game.setPlayersRoles();
        let playerSocket = game.getPlayerSockets();
        for (var player in playerSocket) {
          io.to(playerSocket[player]).emit(
            types.UPDATE_ROLE,
            game.getPlayersRole(player)
          );
          io.to(playerSocket[player]).emit(
            types.UPDATE_ROLEDESCRIPTION,
            game.getPlayersDescription(player)
          );
          io.to(playerSocket[player]).emit(
            types.UPDATE_SELECT_NUM,
            game.getNightSelectNum(game.getPlayersRole(player))
          );
        }
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
    game.playerNightAction(payload.role, payload.selectedPlayers);

    if (game.getGamePhase() === "Daytime") {
      game.printAll();
      let playerSocket = game.getPlayerSockets();
      // Send back dayDescription
      for (var player in playerSocket) {
        console.log(player);
        if (game.getPlayersRole(player) in game.getMessageBack()) {
          io.to(playerSocket[player]).emit(
            types.UPDATE_DAYDESCRIPTION,
            game.getMessageBack(player)[game.getPlayersRole(player)]
          );
        } else {
          io.to(playerSocket[player]).emit(types.UPDATE_DAYDESCRIPTION, null);
        }
      }
      io.sockets.emit(types.UPDATE_PLAYERS, game.clearPlayers());
      io.sockets.emit(types.UPDATE_GAMEPHASE, game.getGamePhase());
    }
  });

  socket.on(types.DAY_KILLSELECT_SUBMIT, payload => {
    game.killSelectAdd(payload.selectedUser, payload.role);
    
    if (game.readyForKillReveal) {
      io.sockets.emit(types.UPDATE_KILLS, game.getKills()); 
    }
  });

  socket.on("disconnect", () => {
    console.log("client disconnected, id: ", socket.id);
  });
});

server.listen(port, () => console.log("server listening on port ", port));
