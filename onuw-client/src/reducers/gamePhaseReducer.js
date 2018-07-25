import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function gameStateReducer (state = {}, action) {
  switch (action.type) {
    case types.NEW_GAMEPHASE:
        return action.payload;
    default:
      return state;
  }
}