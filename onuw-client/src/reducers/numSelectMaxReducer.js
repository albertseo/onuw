import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function numSelectMaxReducer(state = {}, action) {
  switch (action.type) {
    case types.SELECT_SUB:
        return state - 1;
    case types.SELECT_ADD:
        return state + 1;
    default:
      return state;
  }
}
