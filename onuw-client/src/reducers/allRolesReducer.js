import * as types from "../actions/types";

export default function allRolesReducer (state = {}, action) {
  switch (action.type) {
    case types.ROLE_TOGGLE: // Toggles a role from selected to unselected
      return {
        ...state,
        [action.payload.role]: !action.payload.select
      };
    case types.UPDATE_ALL_ROLES:
      return action.payload;
    default:
      return state;
  }
}