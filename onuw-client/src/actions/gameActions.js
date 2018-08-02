import * as types from "./types";

export function toggleRole(roleName, isSelected) {
  return function(dispatch, getState, { emit }) {
      dispatch(togglingRole(roleName, isSelected));
    // Toggles the status of a player/card
    // if (!isSelected && getState().numSelectMax > 0) {
      // Currently not selected, check if can select more
      // dispatch(togglingRole(playerName, isSelected));
    //   dispatch(subRole());
    // } else if (isSelected) {
      // Currently selected, can always deselect
      // dispatch(togglingRole(playerName, isSelected));
    //   dispatch(addRole());
    // }
  };
}

function togglingRole(roleName, isSelected) {
  return {
    type: types.ROLE_TOGGLE,
    payload: { role: roleName, select: isSelected }
  };
}

function addRole() {
    return {
        type: types.ROLE_ADD,
        payload: null
    }
}

function subRole() {
    return {
        type: types.ROLE_SUB,
        payload: null
    }
}
