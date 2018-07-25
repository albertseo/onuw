import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function playersReducer(state = {}, action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      console.log(action.payload);
      return {
        ...state,
        [action.payload.name]: action.payload.role
      }
        action.payload
    ;
    default:
      return state;
  }
}