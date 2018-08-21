import * as types from "./types";

export function toggleRole(roleName, isSelected) {
  return function(dispatch, getState, { emit }) {
      // Check for number of selected is handled at the component level
      dispatch(togglingRole(roleName, isSelected));
      emit(types.ROLE_TOGGLE, {role: roleName, select: isSelected});
  };
}

export function majorityNumAdd() {
  return function(dispatch, getState, { emit }) {
    dispatch(majAdd());
    emit(types.MAJORITY_ADD, null);
  }
}

export function majorityNumSub() {
  return function(dispatch, getState, { emit }) {
    dispatch(majSub());
    emit(types.MAJORITY_SUB, null);
  }
}

export function majorityReset() {
  return function (dispatch, getState, { emit }) {
    dispatch(majReset());
    emit(types.MAJORITY_RESET, null);
  }
}

export function performNightAction(role, selectedPlayers) {
  return function (dispatch, getState, { emit }) {
    emit(types.PLAYER_ACTION, {role: role, selectedPlayers: selectedPlayers});
  }
}

export function sendKillSelect(killSelect, player) {
  return function (dispatch, getState, { emit }) {
    emit(types.DAY_KILLSELECT_SUBMIT, {selectedUser: killSelect, selectedPlayers: player});
  }
}

function majAdd() {
  return {
    type: types.MAJORITY_ADD,
    payload: null
  }
}

function majSub() {
  return {
    type: types.MAJORITY_ADD,
    payload: null
  }
}

function majReset() {
  return {
    type: types.MAJORITY_RESET,
    payload: null
  }
}

function togglingRole(roleName, isSelected) {
  return {
    type: types.ROLE_TOGGLE,
    payload: { role: roleName, select: isSelected }
  };
}
