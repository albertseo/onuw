import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function userRoleDescriptionReducer (state = {}, action) {
    switch (action.type) {
      case types.UPDATE_ROLEDESCRIPTION:
        return action.payload;
      default:
        return state;
    }
  }