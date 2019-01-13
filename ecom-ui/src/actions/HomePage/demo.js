// actions/TodoActions.js
import * as types from "../constants/ActionTypes";

export function handleDemo1() {
  return {
    type: types.HANDLE_DEMO,
    payload: types.HANDLE_DEMO_1
  };
}

export function handleDemo2() {
  return {
    type: types.HANDLE_DEMO,
    payload: types.HANDLE_DEMO_2
  };
}
