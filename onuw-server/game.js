const roles = require("./gameConsts.js").roles;
const descriptions = require("./gameConsts.js").descriptions;
// This is the master server copy of a game that is running
class Game {
  constructor() {
    // Sets up the game object with the same initial state as the client
    this.players = {}; // The current players in the game with their roles
    this.playersNight = {}; // The current players in the game with their roles
    this.playerSockets = {};  // Map the players to their socket id's
    this.centerCards = {
      "Alpha": "",
      "Beta": "",
      "Gamma": ""
    };
    this.centerCardsNight = {}; // Center cards during the night
    this.gamePhase = "Intro"; // Current state of the game, determines what view to show
    this.currentRoles = []; // The roles that are in the current game
    this.allRoles = roles; // All of the roles that are available in the game
    this.currentDescriptions = {}; // Descriptions that will be used this game
    this.allDescriptions = descriptions; // All the descriptions for the roles
    this.majorityNum = 0; // Number used to confirm everyone
    this.werewolves = []; // The players that are werewolves in this game
    this.masons = []; // The playesr that are masons in this game
    this.playerActions = {}; // Stores all of the actions players have sent to server
    this.messageBack = {}; // Messages to send back to players
    this.killSelect = {}; // Totaling KillSelect
  }

  // Print the status of the game
  printAll() {
    console.log("===============================");
    console.log("Players: ");
    console.log(this.players);
    console.log("PlayersNight: ");
    console.log(this.playersNight);
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
    console.log("Message Back");
    console.log(this.messageBack);
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

  getMessageBack() {
    return this.messageBack;
  }

  clearPlayers() {
    var playersToSend = Object.assign({}, this.players);
    for (var player in playersToSend) {
      playersToSend[player] = false;
    }
    return playersToSend;
  }

  // Get the role of a specific player
  getPlayersRole(playerName) {
    if (playerName in this.players) {
      return this.players[playerName];
    } else {
      return this.centerCards[playerName];
    }
  }

  getPlayersRoleNight(playerName) {
    if (playerName in this.playersNight) {
      return this.playersNight[playerName];
    } else {
      return this.centerCardsNight[playerName];
    }
  }

  // Get the player for a role
  getRolesPlayer(role) {
    for (var player in this.players) {
      if (this.players[player] === role) {
        return player;
      }
    }
    for (var centers in this.centerCards) {
      if (this.centerCards[player] === role) {
        return centers;
      }
    }
  }

  // Get the player for a role
  getRolesPlayerNight(role) {
    for (var player in this.playersNight) {
      if (this.playersNight[player] === role) {
        return player;
      }
    }
    for (var centers in this.centerCardsNight) {
      if (this.centerCardsNight[player] === role) {
        return centers;
      }
    }
  }

  // Get the description of a specific player
  getPlayersDescription(playerName) {
    return this.currentDescriptions[playerName];
  }

  getNightSelectNum(role) {
    let noActionRoles = [
      "Villager 1",
      "Villager 2",
      "Minion",
      "Mason 1",
      "Mason 2",
      "Werewolf 1",
      "Werewolf 2",
      "Tanner",
      "Hunter",
      "Insomniac"
    ];
    if (role === "Seer" || role === "Troublemaker") {
      return 2;
    } else if (noActionRoles.indexOf(role) > -1) {
      return 0;
    } else {
      return 1;
    }
  }

  // Sets a player's Role
  setPlayerRole(playerName, role) {
      if (playerName in this.players) {
      this.players = {
        ...this.players,
        [playerName]: role
      }
    } else {
      this.setCenterRole(playerName, role);
    }
  }

  // Sets a player's Role
  setPlayerRoleNight(playerName, role) {
      if (playerName in this.playersNight) {
      this.playersNight = {
        ...this.playersNight,
        [playerName]: role
      }
    } else {
      this.setCenterRoleNight(playerName, role);
    }
  }

  // Sets a center card's Role
  setCenterRole(playerName, role) {
    this.centerCards = {
      ...this.centerCards,
      [playerName]: role
    }
  }

  // Sets a center card's Role
  setCenterRoleNight(playerName, role) {
    this.centerCardsNight = {
      ...this.centerCardsNight,
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
        this.allDescriptions["Werewolf 1"] += werewolf + " ";
        this.allDescriptions["Werewolf 2"] += werewolf + " ";
        this.allDescriptions["Minion"] += werewolf + " ";
      }
    }

    // Mason checks
    for (var mason of this.masons) {
      this.allDescriptions["Mason 1"] += mason + " ";
      this.allDescriptions["Mason 2"] += mason + " ";
    }

    // Assign role descriptions for all players
    for (var player in this.players) {
      var role = this.getPlayersRole(player);
      // Set current role Descriptions
      this.currentDescriptions = {
        ...this.currentDescriptions,
        [player]: this.allDescriptions[role]
      }
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
      this.doBaseNightActions();
    }
  }


  // Do all of the night actions
  doBaseNightActions() {
    this.playersNight = Object.assign({}, this.players);
    this.centerCardsNight = Object.assign({}, this.centerCards);
    //If doppleganger were implemented, it would go here
    if (this.exists("Lone Werewolf")) {
      this.messageBack["Lone Werewolf"] = "The center card you discovered is " + this.playerActions["Lone Werewolf"][0] + ": " + this.getPlayersRoleNight(this.playerActions["Lone Werewolf"][0]);
    }
    if (this.exists("Seer")) {
      let messageIntro = "The card you see is "
      this.playerActions.Seer.forEach(card => {
        console.log(card);
        messageIntro += card + ": " + this.getPlayersRoleNight(card) + " ";
      });
      this.messageBack.Seer = messageIntro;
    }
    if (this.exists("Robber")) {
      this.swapPlayersRole(this.getRolesPlayer("Robber"), this.playerActions["Robber"][0]);
      this.messageBack.Robber = "You have swapped your role with " + this.playerActions["Robber"][0] + ", you are now " + this.getPlayersRole(this.playerActions["Robber"][0]);
    }
    if (this.exists("Troublemaker")) {
      this.swapPlayersRole(this.playerActions["Troublemaker"][0], this.playerActions["Troublemaker"][1]);
      this.messageBack.Troublemaker = "You have switched the roles of " + this.playerActions["Troublemaker"][0] + " and " + this.playerActions["Troublemaker"][1];
    }
    if (this.exists("Drunk")) {
      this.swapPlayersRole(this.getRolesPlayer("Drunk"), this.playerActions["Drunk"]);
      this.messageBack.Drunk= "You have swapped your role with a center card";
    }
    if (this.exists("Insomniac")) {
      if (this.getRolesPlayer("Insomniac") === this.getRolesPlayerNight("Insomniac")) {
        this.messageBack.Insomniac = "You look at your card at the end of the night and you are still an Insomnaic";
      } else {
        this.messageBack.Insomniac = "You look at your card at the end of the night and you are now: " + this.getPlayersRoleNight(this.getRolesPlayer("Insomniac"));
      }
    }
    // Set gamePhase to Day
    this.changeGamePhase("Daytime")
  }

  exists(role) {
    return role in this.playerActions;
  }

  // Swaps the roles of two players
  swapPlayersRole(player1, player2) {
    let temp = this.getPlayersRoleNight(player1)
    this.setPlayerRoleNight(player1, this.getPlayersRoleNight(player2));
    this.setPlayerRoleNight(player2, temp);
  }

  // Execute the player's action depending on the player
  killSelectAdd(player, action) {
    // First logs the action
    this.killSelect = {
      ...this.playerActions,
      [player]: action,
    };
    //Check if everyone has submitted an action
    if (Object.keys(this.playerActions).length === Object.keys(this.players).length) {
      this.doBaseNightActions();
    }
  }
}

module.exports = Game;
