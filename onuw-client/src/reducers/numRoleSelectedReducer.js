import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function numRoleSelectedReducer(state = {}, action) {
  switch (action.type) {
    case types.UPDATE_ALL_ROLES:
        let numTrue = 0
        for (var player in action.payload) {
            if (action.payload[player]) {
                numTrue += 1
            }
        }
        return numTrue
    default:
      return state;
  }
}
