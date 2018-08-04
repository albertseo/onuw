import * as types from "../actions/types";

export default function majorityNumReducer(state = {}, action) {
    switch(action.type) {
        case types.MAJORITY_ADD:
            return state + 1;
        case types.MAJORITY_SUB:
            return state - 1;
        case types.UPDATE_MAJORITY:
            return action.payload;
        default:
            return state;
    }
}