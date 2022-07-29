/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
import * as t from './incrementTypes';

const INITIAL_STATE = {
  value: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.DISPATCH_INCREMENT:
      const value = state.value + 1;
      return { value };
    case t.DISPATCH_DECREMENT:
      const decValue = state.value - 1;
      return { value: decValue };
    case t.DISPATCH_INCREMENT_INIT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
