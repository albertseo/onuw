const roles = require("./roles.js").roles;
// This is the master server copy of a game that is running
class Game {
  constructor() {
    // Sets up the game object with the same initial state as the client
    this.players = {}; // The current players in the game
    this.gamePhase = "enterName"; // Current state of the game, determines what view to show
    this.currentRoles = []; // The roles that are in the current game
    this.allRoles = roles; // All of the roles that are available in the game
  }

  // Gets the list of players
  getPlayers() {
    return this.players;
  }

  // Gets the current game phase
  getGamePhase() {
    return this.gamePhase;
  }

  // Gets the current roles
  getCurrentRoles() {
    return this.currentRoles;
  }

  // Get the role of a specific player
  getPlayersRole(playerName) {
      return this.players[playerName];
  }

  // Adds a player to the players list
  addPlayer(playerName, playerRole) {
    this.players = {
      ...this.players,
      [playerName]: playerRole
    };
  }

  // Changes the gamePhase
  changeGamePhase(newPhase) {
    this.gamePhase = newPhase;
  }

  // Execute the player's action depending on the player
  playerAction(player, action) {
    switch (player) {
      default:
        return "";
    }
  }

  // Swaps the roles of two players
  swapPlayersRole(player1, player2) {
      let temp = this.players[player1];
      this.players[player1] = this.players[player2];
      this.players[player2] = temp;
  }
}

module.exports = Game;
