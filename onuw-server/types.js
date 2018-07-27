// This file stores all of the actions types for redux
// For Players:
export const NEW_USERNAME = "NEW_USERNAME";
export const ADD_PLAYER = "ADD_PLAYER";

// For gameState:
export const NEW_GAMEPHASE = "NEW_GAMEPHASE";

// REMEMBER TO UPDATED TYPES IN CLIENT FOLDER AS WELL
// Actions that will dispatch from server:
export const UPDATE_PLAYERS = "UPDATE_PLAYERS";

// For communicating with the server, there are the actions the client listens for
// makes an object of the form {userNew: 'userNew'}
export const messageTypes = [
  UPDATE_PLAYERS
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})
