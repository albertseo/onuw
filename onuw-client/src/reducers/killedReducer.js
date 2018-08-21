import * as types from "../actions/types";

// Reducer that updates gameState
export default function killedReducer (state = {}, action) {
  switch (action.type) {
    case types.UPDATE_KILLS:
        return action.payload;
    default:
      return state;
  }
}