import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function playerNameReducer(state = {}, action) {
  switch (action.type) {
    case types.NEW_USERNAME:
      return action.payload;
    default:
      return state;
  }
}
