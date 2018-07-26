import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { init as websocketInit, emit } from "./actions/websocket";

// Creates the inital state of the store
// NOTE: some inital states are just set to see page layouts and will be fixed later.
const initialState = {
  players: {}, // The current players in the game
  username: "", // The user's name
  userRole: "", // The user's assigned role
  gamePhase: "enterName" // Current state of the game, determines what view to show
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
