import { combineReducers } from "redux";
import usernameReducer from "./usernameReducer";
import playersReducer from "./playersReducer";
import gamePhaseReducer from "./gamePhaseReducer";
import userRoleReducer from "./userRoleReducer";
import userRoleDescriptionReduer from "./userRoleDescriptionReducer";
import centerCardsReducer from "./centerCardsReducer";
import nightSelectNumReducer from "./nightSelectNumReducer";
import majorityNumReducer from "./majorityNumReducer";
import allRolesReducer from "./allRolesReducer";
import currentRolesReducer from "./currentRolesReducer";
import majorityReadyReducer from "./majorityReadyReducer";
import numRoleSelectedReducer from "./numRoleSelectedReducer";

// This is the root reducer that gets passed into the constructo of createStore
export default combineReducers({
  players: playersReducer,
  username: usernameReducer,
  userRole: userRoleReducer,
  userRoleDescription: userRoleDescriptionReduer,
  gamePhase: gamePhaseReducer,
  centerCards: centerCardsReducer,
  nightSelectNum: nightSelectNumReducer,
  majorityNum: majorityNumReducer,
  majorityReady: majorityReadyReducer,
  allRoles: allRolesReducer,
  currentRoles: currentRolesReducer,
  numRoleSelected: numRoleSelectedReducer,
});
