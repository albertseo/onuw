import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function allRolesReducer (state = {}, action) {
  switch (action.type) {
    case types.ROLE_TOGGLE:
      return {
        ...state,
        [action.payload.role]: !action.payload.select
      };
    default:
      return state;
  }
}