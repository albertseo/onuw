import * as types from "../actions/types";

// Reducer that updates gameState
export default function dayDescriptionReducer (state = {}, action) {
  switch (action.type) {
    case types.UPDATE_DAYDESCRIPTION:
        return action.payload;
    default:
      return state;
  }
}