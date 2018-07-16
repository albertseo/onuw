import { NEW_PLAYER } from "../actions/types";

// The initial state of players is set to empty
const initialState = {
  players: ["Albert", "Jonathan", "Daniel"]
};

// This takes in an action and returns the correct state
export default function playersReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_PLAYER:
      return {
        ...state,
        players: action.payload
      };
    default:
      return state;
  }
}
