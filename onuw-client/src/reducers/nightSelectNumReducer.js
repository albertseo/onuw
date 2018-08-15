import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function nightSelectNumReducer(state = {}, action) {
  switch (action.type) {
    case types.SELECT_SUB:
        return state - 1;
    case types.SELECT_ADD:
        return state + 1;
    case types.UPDATE_SELECT_NUM:
        return action.payload;
    default:
      return state;
  }
}
