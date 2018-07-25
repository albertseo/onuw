import { combineReducers } from "redux";
import usernameReducer from "./usernameReducer";
import playersReducer from "./playersReducer";
import gamePhaseReducer from "./gamePhaseReducer";
import userRoleReducer from "./userRoleReducer";

// This is the root reducer that gets passed into the constructo of createStore
export default combineReducers({
  players: playersReducer,
  username: usernameReducer,
  gamePhase: gamePhaseReducer,
  userRole: userRoleReducer
});
