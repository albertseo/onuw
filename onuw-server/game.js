// This is the master server copy of a game that is running
class Game {
  constructor() {
    // Sets up the game object with the same initial state as the client
    this.players = {}; // The current players in the game
    this.username = ""; // The user's name
    this.userRole = ""; // The user's assigned role
    this.gamePhase = "enterName"; // Current state of the game, determines what view to show
  }

  getPlayers() {
      return this.players;
  }

  addPlayer(playerName, playerRole) {
      this.players = {
          ...this.players,
          [playerName]: playerRole
      }
  }
}

module.exports = Game;