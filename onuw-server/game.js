const roles = require("./gameConsts.js").roles;
// This is the master server copy of a game that is running
class Game {
  constructor() {
    // Sets up the game object with the same initial state as the client
    this.players = {}; // The current players in the game
    this.gamePhase = "Intro"; // Current state of the game, determines what view to show
    this.currentRoles = []; // The roles that are in the current game
    this.allRoles = roles; // All of the roles that are available in the game
    this.majorityNum = 0 // Number used to confirm everyone
  }

  // Gets the list of players
  getPlayers() {
    return this.players;
  }

  // Gets the number of players
  getNumPlayers() {
    return Object.keys(this.players).length;
  }

  // Gets the current game phase
  getGamePhase() {
    return this.gamePhase;
  }

  // Gets the current roles
  getCurrentRoles() {
    return this.currentRoles;
  }

  // Gets all roles
  getAllRoles() {
    return this.allRoles;
  }

  // Gets the current number of clients confirmed for an action
  getMajorityNum() {
    return this.majorityNum;
  }

  // Get the role of a specific player
  getPlayersRole(playerName) {
    return this.players[playerName];
  }

  setMajorityNum(num) {
    this.majorityNum = num;
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

  // Toggle if a role is selected for the game
  roleToggle(payload) {
    this.allRoles[payload.role] = !payload.select;
  }

  // Execute the player's action depending on the player
  playerNightAction(player, action) {
    switch (player) {
      case roles.Villager:
        villagerAction(player, action);
        break;
      case roles.Werewolf:
        werewolfAction(player, action);
        break;
      case roles.Seer:
        seerAction(player, action);
        break;
      case roles.Robber:
        robberAction(player, action);
        break;
      case roles.Troublemaker:
        troublemakerAction(player, action);
        break;
      case roles.Tanner:
        tannerAction(player, action);
        break;
      case roles.Drunk:
        drunkAction(player, action);
        break;
      case roles.Hunter:
        hunterAction(player, action);
        break;
      case roles.Mason:
        masonAction(player, action);
        break;
      case roles.Insomniac:
        insomniacAction(player, action);
        break;
      case roles.Minion:
        minionAction(player, action);
        break;
      case roles.Doppleganger:
        dopplegangerAction(player, action);
        break;
      default:
        return "Role not found";
    }
  }

  // The villager has no action during the night
  villagerAction(player, action) {
      return;
  }

  // Werewolf can either know who the other werewolfs are, or look at a center card
  werewolfAction(player, action) {
    return;
  }

  // Swaps the roles of two players
  swapPlayersRole(player1, player2) {
    let temp = this.players[player1];
    this.players[player1] = this.players[player2];
    this.players[player2] = temp;
  }
}

module.exports = Game;
