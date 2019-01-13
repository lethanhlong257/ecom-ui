import * as types from "../../constants/ActionTypes.js";

const initialState = [
  {
    text: "Use Redux"
  }
];

export default function DemoReducer(state = initialState, action) {
  switch (action.type) {
    case types.HANDLE_DEMO:
      return [
        {
          text: action.text
        },
        ...state
      ];
    default:
      return state;
  }
}
