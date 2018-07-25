// This file stores all of the actions types for redux

// For username:
export const NEW_USERNAME = "NEW_USERNAME";

// For gameState:
export const NEW_GAMEPHASE = "NEW_GAMEPHASE";

// Actions that will dispatch from server:
export const ADD_PLAYER = "ADD_PLAYER";

// For communicating with the server, there are the actions the client listens for
// makes an object of the form {userNew: 'userNew'}
export const messageTypes = [
    "ADD_PLAYER"
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})
