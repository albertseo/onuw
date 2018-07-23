import * as types from "./types";

function setGameState(gameState) {
  return function (dispatch) {
    dispatch(newGameState(gameState));
  }
}

function newGameState(gameState) {
  return {
    type: types.NEW_GAMESTATE,
    payload: gameState
  };
}

export default setGameState;
