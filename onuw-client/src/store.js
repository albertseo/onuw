import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { init as websocketInit, emit } from "./actions/websocket";
import { baseSetRoles } from "./gameConstants";

// Creates the inital state of the store
// NOTE: some inital states are just set to see page layouts and will be fixed later.
const initialState = {
  players: {
    "Alpha": false,
    "Beta": false,
    "Gamma": false
  }, // The current players in the game
  username: "temp", // The user's name
  userRole: "temp", // The user's assigned role
  userRoleDescription: "temp", // description of user's role
  gamePhase: "Pick Roles", // Current state of the game, determines what view to show
  centerCards: { // Center cards during the game
    "Alpha": false,
    "Beta": false,
    "Gamma": false
  },
  nightSelectNum: 1, // How many cards that can be selected at once
  majorityNum: 0, // Number to count if everyone is ready
  majorityReady: false, // Only true when everyone ready to move on
  allRoles: baseSetRoles, // All the roles that are available to pick from, and which are selected
  currentRoles: {}, // All of the roles that are in the current game
  
  numRoleSelected: 0, // Number of roles that need to be selected 
};

const middleware = [thunk.withExtraArgument({ emit })];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
websocketInit(store);
export default store;
