import * as types from "../actions/types";

// This takes in an action and returns the correct state
export default function centerCardsReducer(state = {}, action) {
  switch (action.type) {
    case types.TOGGLE_CARD:
    console.log(action);
      return {
        ...state,
        [action.payload.name]: !action.payload.select
      };
    default:
      return state;
  }
}
