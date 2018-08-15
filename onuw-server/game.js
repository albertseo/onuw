const roles = require("./gameConsts.js").roles;
const descriptions = require("./gameConsts.js").descriptions;
// This is the master server copy of a game that is running
class Game {
  constructor() {
    // Sets up the game object with the same initial state as the client
    this.players = {}; // The current players in the game with their roles
    this.playerSockets = {};  // Map the players to their socket id's
    this.centerCards = {
      "Alpha": "",
      "Beta": "",
      "Gamma": ""
    };
    this.gamePhase = "Intro"; // Current state of the game, determines what view to show
    this.currentRoles = []; // The roles that are in the current game
    this.allRoles = roles; // All of the roles that are available in the game
    this.currentDescriptions = {}; // Descriptions that will be used this game
    this.allDescriptions = descriptions; // All the descriptions for the roles
    this.majorityNum = 0; // Number used to confirm everyone
    this.werewolves = []; // The players that are werewolves in this game
    this.masons = []; // The playesr that are masons in this game
    this.playerActions = {}; // Stores all of the actions players have sent to server
  }

  // Print the status of the game
  printAll() {
    console.log("===============================");
    console.log("Players: ");
    console.log(this.players);
    console.log("Player Sockets");
    console.log(this.playerSockets);
    console.log("Center Cards:")
    console.log(this.centerCards);
    console.log("GamePhase");
    console.log(this.gamePhase);
    console.log("Current Roles");
    console.log(this.currentRoles);
    console.log("Current Descriptions");
    console.log(this.currentDescriptions);
    console.log("Majority Num");
    console.log(this.majorityNum);
    console.log("Werewolves");
    console.log(this.werewolves);
    console.log("Masons");
    console.log(this.masons);
    console.log("Player Actions");
    console.log(this.playerActions);
    console.log("===============================");
  }

  // Gets the list of players
  getPlayers() {
    return this.players;
  }

  // Gets the list of players and socket id's
  getPlayerSockets() {
    return this.playerSockets;
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

  // Get the description of a specific player
  getPlayersDescription(playerName) {
    return this.currentDescriptions[playerName];
  }

  getNightSelectNum(role) {
    if (role === "Seer" || role === "Troublemaker") {
      return 2;
    } else {
      return 1;
    }
  }

  // Sets a player's Role
  setPlayerRole(playerName, role) {
    this.players = {
      ...this.players,
      [playerName]: role
    }
  }

  // Sets a center card's Role
  setCenterRole(playerName, role) {
    this.centerCards = {
      ...this.centerCards,
      [playerName]: role
    }
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

  // Add a player and thier socket ID
  addPlayerSocket(playerName, socketID) {
    this.playerSockets = {
      ...this.playerSockets,
      [playerName]: socketID
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

  // Put the selected roles into Current Roles
  setCurrentRoles() {
    for (var role in this.allRoles) {
      if (this.allRoles[role]) {
        this.currentRoles.push(role);
      }
    }
  }

  // Shuffle the list of roles and assign them to players
  setPlayersRoles() {
    // Shuffle list
    let currentIndex = this.currentRoles.length;
    let tempValue, randIndex;
    while (currentIndex != 0) {
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      tempValue = this.currentRoles[currentIndex];
      this.currentRoles[currentIndex] = this.currentRoles[randIndex];
      this.currentRoles[randIndex] = tempValue;
    }

    // Assign roles to players
    let currentRoleCopy = this.currentRoles.slice(0)
    for (var player in this.players) {
      let role = currentRoleCopy.pop()
      this.setPlayerRole(player, role);
      // Check if role is werewolf or mason
      if (role === "Werewolf 1" || role === "Werewolf 2") {
        this.werewolves.push(player);
      } else if (role === "Mason 1" || role === "Mason 2") {
        this.masons.push(player);
      }
    }
    
    // Werewolf checks
    if (this.werewolves.length === 1) { // Check if there is a lone werewolf
      this.setPlayerRole(this.werewolves[0], "Lone Werewolf");
    } else { // Else edit the description of werewolf
      for (var werewolf of this.werewolves) {
        console.log(this.allDescriptions["Werewolf"]);
        this.allDescriptions["Werewolf 1"] += werewolf + " ";
        this.allDescriptions["Werewolf 2"] += werewolf + " ";
        console.log(this.allDescriptions["Werewolf"]);
      }
    }

    // Mason checks
    for (var mason of this.masons) {
      console.log(this.allDescriptions["Mason"]);
      this.allDescriptions["Mason 1"] += mason + " ";
      this.allDescriptions["Mason 2"] += mason + " ";
      console.log(this.allDescriptions["Mason"]);
    }

    // Assign role descriptions for all players
    for (var player in this.players) {
      var role = this.getPlayersRole(player);
      // Set current role Descriptions
      this.currentDescriptions = {
        ...this.currentDescriptions,
        [player]: this.allDescriptions[role]
      }
      console.log(this.allDescriptions);
    }
    
    // Assing roles to center cards
    for (var card in this.centerCards) {
      this.setCenterRole(card, currentRoleCopy.pop());
    }
  }

  // Execute the player's action depending on the player
  playerNightAction(player, action) {
    // First logs the action
    this.playerActions = {
      ...this.playerActions,
      [player]: action,
    };
    //Check if everyone has submitted an action
    if (Object.keys(this.playerActions).length === Object.keys(this.players).length) {
      // Perform actions in order
      console.log("Ready to do actions");
    }
  }


  // Do all of the night actions
  doAllNightActions() {
    switch (player) {
      case roles.Villager:
        villagerAction(player, action);
      case roles.Werewolf:
        werewolfAction(player, action);
      case roles.Seer:
        seerAction(player, action);
      case roles.Robber:
        robberAction(player, action);
      case roles.Troublemaker:
        troublemakerAction(player, action);
      case roles.Tanner:
        tannerAction(player, action);
      case roles.Drunk:
        drunkAction(player, action);
      case roles.Hunter:
        hunterAction(player, action);
      case roles.Mason:
        masonAction(player, action);
      case roles.Insomniac:
        insomniacAction(player, action);
      case roles.Minion:
        minionAction(player, action);
      case roles.Doppleganger:
        dopplegangerAction(player, action);
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
