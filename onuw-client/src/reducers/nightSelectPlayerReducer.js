import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function nightSelectPlayerReducer(state = {}, action) {
  switch (action.type) {
    case types.NIGHT_PLAYER_ADD:
      return [...state, action.payload]
    case types.NIGHT_PLAYER_SUB:
      return state.filter(player => player !== action.payload);
    case types.NIGHT_PLAYER_RESET:
      return [];
    case types.NIGHT_PLAYER_SET:
      return [action.payload];
    default:
      return state;
  }
}