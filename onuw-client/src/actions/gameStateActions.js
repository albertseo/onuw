import * as types from "./types";

function setPhaseState(gamePhase) {
  return function (dispatch) {
    dispatch(newPhaseState(gamePhase));
  }
}

function newPhaseState(gamePhase) {
  return {
    type: types.NEW_GAMEPHASE,
    payload: gamePhase
  };
}

export default setPhaseState;
