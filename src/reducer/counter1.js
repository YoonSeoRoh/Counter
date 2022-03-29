import { COUNTER1_INCREASE, COUNTER1_DECREASE } from "../actions/types";

const initialState = 0;
export default function counter1(state = initialState, action) {
  switch (action.type) {
    case COUNTER1_INCREASE:
      return state + 1;
    case COUNTER1_DECREASE:
      return state - 1;
    default:
      return state;
  }
}
