import * as types from "./types";

export function toggleRole(roleName, isSelected) {
  return function(dispatch, getState, { emit }) {
      // Check for number of selected is handled at the component level
      dispatch(togglingRole(roleName, isSelected));
      emit(types.ROLE_TOGGLE, {role: roleName, select: isSelected});
  };
}

function togglingRole(roleName, isSelected) {
  return {
    type: types.ROLE_TOGGLE,
    payload: { role: roleName, select: isSelected }
  };
}
