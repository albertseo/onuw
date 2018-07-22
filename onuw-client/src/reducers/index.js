import { combineReducers } from "redux";
import playerNameReducer from "./playerNameReducer";
import playersReducer from "./playersReducer";

// This is the root reducer that gets passed into the constructo of createStore
export default combineReducers({
  players: playersReducer,
  playerName: playerNameReducer
});
