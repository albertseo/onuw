// This file stores all of the actions types for redux

// For username:
export const NEW_USERNAME = "NEW_USERNAME";
export const ADD_PLAYER = "ADD_PLAYER";

// For gameState:
export const NEW_GAMEPHASE = "NEW_GAMEPHASE";

// For gameActions:
export const PLAYER_ACTION = "PLAYER_ACTION";

// Actions that will dispatch from server:
export const UPDATE_PLAYERS = "UPDATE_PLAYERS";
export const UPDATE_GAMEPHASE = "UPDATE_GAMEPHASE";
export const UPDATE_ROLE = "UPDATE_ROLE";

// For communicating with the server, there are the actions the client listens for
// makes an object of the form {userNew: 'userNew'}
export const messageTypes = [
  UPDATE_PLAYERS,
  UPDATE_GAMEPHASE,
  UPDATE_ROLE,
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})
