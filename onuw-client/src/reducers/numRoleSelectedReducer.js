import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function numRoleSelectedReducer(state = {}, action) {
  switch (action.type) {
    case types.UPDATE_PLAYERS:
        return Object.keys(action.payload).length + 3;
    case types.UPDATE_ALL_ROLES:
        let numTrue = 0
        for (var player in action.payload) {
            if (action.payload[player]) {
                numTrue += 1
            }
        }
        return numTrue
    case types.ROLESELECT_NUMSELECTADD:
        return state - 1;
    case types.ROLESELECT_NUMSELECTSUB:
        return state + 1;
    default:
      return state;
  }
}
