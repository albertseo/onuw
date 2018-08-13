import * as types from "./types";

// Thunk action creators
export function newNamePost(playerName) {
  return function(dispatch) {
    dispatch(newUsername(playerName));
  };
}

export function newPlayerRole(playerName, playerRole = "") {
  return function(dispatch, getState, { emit }) {
    // Creates the store with the rootReducer and the initialState
    dispatch(addPlayer(playerName, playerRole));
    emit(types.ADD_PLAYER, { name: playerName, role: playerRole });
  };
}

export function toggleSelect(playerName, isSelected) {
  return function(dispatch, getState, { emit }) {
    // Toggles the status of a player/card
    if (!isSelected && getState().nightSelectNum > 0) {
      // Currently not selected, check if can select more
      dispatch(setSelect(playerName, isSelected));
      dispatch(subSelect());
      dispatch(addSelectPlayer(playerName));
    } else if (isSelected) {
      // Currently selected, can always deselect
      dispatch(setSelect(playerName, isSelected));
      dispatch(addSelect());
      dispatch(subSelectPlayer(playerName));
    }
  };
}

export function toggleSelectCenter(playerName, isSelected) {
  return function(dispatch, getState, { emit }) {
    // Toggles the status of a player/card
    if (!isSelected && getState().nightSelectNum > 0) {
      // Currently not selected, check if can select more
      dispatch(setSelectCenter(playerName, isSelected));
      dispatch(subSelect());
    } else if (isSelected) {
      // Currently selected, can always deselect
      dispatch(setSelectCenter(playerName, isSelected));
      dispatch(addSelect());
    }
  };
}

// Regular action creators
function newUsername(playerName) {
  return {
    type: types.NEW_USERNAME,
    payload: playerName
  };
}

function addPlayer(playerName, playerRole = "") {
  return {
    type: types.ADD_PLAYER,
    payload: { name: [playerName], role: playerRole }
  };
}

function setSelect(playerName, isSelected) {
  return {
    type: types.TOGGLE_CARD,
    payload: { name: playerName, select: isSelected }
  };
}

function setSelectCenter(playerName, isSelected) {
  return {
    type: types.TOGGLE_CENTER,
    payload: { name: playerName, select: isSelected }
  };
}

function addSelect() {
  return {
    type: types.SELECT_ADD,
    payload: null
  };
}

function subSelect() {
  return {
    type: types.SELECT_SUB,
    payload: null
  };
}

function addSelectPlayer(playerName) {
  return {
    type: types.NIGHT_PLAYER_ADD,
    payload: playerName
  }
}

function subSelectPlayer(playerName) {
  return {
    type: types.NIGHT_PLAYER_SUB,
    payload: playerName
  }
}