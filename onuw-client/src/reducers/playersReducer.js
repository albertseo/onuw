import { FETCH_PLAYERS, NEW_PLAYER } from "../actions/types";

// The initial state of players is set to empty
const initialState = {
    players: [],
    player: {}
}

// This takes in an action and returns the correct state
export default function playersReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
