import * as types from "./types";

function newNamePost(playerName) {
  return function (dispatch) {
    console.log("newNamePost");
    dispatch(newPlayer(playerName));
  }
}

function newPlayer(playerName) {
  return {
    type: types.NEW_USERNAME,
    payload: playerName
  };
}

export default newNamePost;
