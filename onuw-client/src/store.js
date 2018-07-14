import { createStore } from "redux"
import rootReducer from "./reducers"

// Creates the inital state of the store
const initialState = {
    gameState: "lobby"
};

// Creates the store with the rootReducer and the initialState
const store = createStore(rootReducer, initialState,)

export default store;