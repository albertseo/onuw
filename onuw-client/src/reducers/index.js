import { combineReducers } from "redux";
import usernameReducer from "./usernameReducer";
import playersReducer from "./playersReducer";
import gameStateReducer from "./gameStateReducer";
import userRoleReducer from "./userRoleReducer";

// This is the root reducer that gets passed into the constructo of createStore
export default combineReducers({
  players: playersReducer,
  username: usernameReducer,
  gameState: gameStateReducer,
  userRole: userRoleReducer
});
