import * as types from "../actions/types";

export default function currentRolesReducer (state = {}, action) {
  switch (action.type) {
    case types.UPDATE_GAME_ROLES: // Update the roles that are used in this game from the server
      return action.payload;
    default:
      return state;
  }
}