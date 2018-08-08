import * as types from "../actions/types";

export default function majorityNumReducer(state = {}, action) {
    switch(action.type) {
        case types.UPDATE_MAJORITY_READY:
            return action.payload
        case types.MAJORITY_RESET:
            return false;
        default:
            return state;
    }
}