import * as types from "./types";

// If willSend is true, the function will emit to the server with the new gamePhase
export function setPhaseState(gamePhase, willSend=false) {
  return function (dispatch, getState, { emit }) {
    if (willSend) {
      emit(types.NEW_GAMEPHASE, gamePhase);
    }
    dispatch(newPhaseState(gamePhase));
  }
}

function newPhaseState(gamePhase) {
  return {
    type: types.NEW_GAMEPHASE,
    payload: gamePhase
  };
}
