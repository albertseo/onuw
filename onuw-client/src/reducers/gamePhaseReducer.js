import * as types from "../actions/types";

// Reducer that updates gameState
export default function gameStateReducer (state = {}, action) {
  switch (action.type) {
    case types.NEW_GAMEPHASE:
        return action.payload;
    case types.UPDATE_GAMEPHASE:
        return action.payload;
    default:
      return state;
  }
}