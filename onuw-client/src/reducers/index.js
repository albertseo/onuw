import { combineReducers } from "redux";
import usernameReducer from "./usernameReducer";
import playersReducer from "./playersReducer";
import gamePhaseReducer from "./gamePhaseReducer";
import userRoleReducer from "./userRoleReducer";
import userRoleDescriptionReduer from "./userRoleDescriptionReducer";
import centerCardsReducer from "./centerCardsReducer";
import numSelectMaxReducer from "./numSelectMaxReducer";
import allRolesReducer from "./allRolesReducer";
import currentRolesReducer from "./currentRolesReducer";

// This is the root reducer that gets passed into the constructo of createStore
export default combineReducers({
  players: playersReducer,
  username: usernameReducer,
  userRole: userRoleReducer,
  userRoleDescription: userRoleDescriptionReduer,
  gamePhase: gamePhaseReducer,
  centerCards: centerCardsReducer,
  numSelectMax: numSelectMaxReducer,
  allRoles: allRolesReducer,
  currentRoles: currentRolesReducer
});
