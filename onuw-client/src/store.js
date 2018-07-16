import { createStore } from "redux";
import rootReducer from "./reducers";

// Creates the inital state of the store
// NOTE: some inital states are just set to see page layouts and will be fixed later.
const initialState = {
  gameState: "lobby",
  players: ["Lorem", "Ipsum", "Dolor"]
};

// Creates the store with the rootReducer and the initialState
const store = createStore(rootReducer, initialState);

export default store;
