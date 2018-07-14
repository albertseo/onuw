import { combinerReducers, combineReducers } from "redux";
import playersReducer from "./playersReducer";

export default combineReducers({
    players: playersReducer
});