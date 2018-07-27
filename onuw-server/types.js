// This file stores all of the actions types for redux
// For Players:
const NEW_USERNAME = "NEW_USERNAME";
const ADD_PLAYER = "ADD_PLAYER";

// For gameState:
const NEW_GAMEPHASE = "NEW_GAMEPHASE";

// For gameActions:
const PLAYER_ACTION = "PLAYER_ACTION";

// REMEMBER TO UPDATED TYPES IN CLIENT FOLDER AS WELL
// Actions that will dispatch from server:
const UPDATE_PLAYERS = "UPDATE_PLAYERS";
const UPDATE_GAMEPHASE = "UPDATE_GAMEPHASE";

module.exports.types = {
  NEW_USERNAME,
  ADD_PLAYER,

  NEW_GAMEPHASE,

  PLAYER_ACTION,

  UPDATE_PLAYERS,
  UPDATE_GAMEPHASE
}
