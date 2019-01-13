import * as types from "../../constants/ActionTypes.js";

export function handleDemo1() {
  return {
    type: types.HANDLE_DEMO,
    payload: types.HANDLE_DEMO
  };
}

export function handleDemo2() {
  return {
    type: types.HANDLE_DEMO,
    payload: types.HANDLE_DEMO_2
  };
}
