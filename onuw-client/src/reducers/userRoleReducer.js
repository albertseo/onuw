import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function userRoleReducer (state = {}, action) {
  switch (action.type) {
    case types.UPDATE_ROLE:
      return action.payload;
    default:
      return state;
  }
}