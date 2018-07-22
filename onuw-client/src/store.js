import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Creates the inital state of the store
// NOTE: some inital states are just set to see page layouts and will be fixed later.
const initialState = {
  players: [],
  playerName: ""
};

// Creates the store with the rootReducer and the initialState
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

export default store;
