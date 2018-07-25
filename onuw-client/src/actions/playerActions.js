import * as types from "./types";

// Thunk action creators
export function newNamePost(playerName) {
  return function (dispatch) {
    dispatch(newUsername(playerName));
  }
}

export function newPlayerRole(playerName, playerRole) {
  return function(dispatch) {
    dispatch(addPlayer(playerName, playerRole));
  }
}

// Regular action creators
function newUsername(playerName) {
  return {
    type: types.NEW_USERNAME,
    payload: playerName
  };
}

function addPlayer(playerName, playerRole="") {
  console.log(playerName);
  return {
    type: types.ADD_PLAYER,
    payload: { name: [playerName], role: playerRole }
  };
}

