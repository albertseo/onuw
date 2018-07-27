import * as types from "./types";

// Thunk action creators
export function newNamePost(playerName) {
  return function (dispatch) {
    dispatch(newUsername(playerName));
  }
}

export function newPlayerRole(playerName, playerRole="") {
  return function(dispatch, getState, { emit }) {
    // Creates the store with the rootReducer and the initialState
    dispatch(addPlayer(playerName, playerRole));
    emit("ADD_PLAYER", {name: playerName, role: playerRole});
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
  return {
    type: types.ADD_PLAYER,
    payload: { name: [playerName], role: playerRole }
  };
}

