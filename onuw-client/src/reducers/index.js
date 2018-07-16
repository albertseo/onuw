import { combinerReducers, combineReducers } from "redux";
import playersReducer from "./playersReducer";

// This is the root reducer that gets passed into the constructo of createStore
export default combineReducers({
    players: playersReducer
});