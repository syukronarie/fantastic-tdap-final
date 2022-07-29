import * as t from './incrementTypes';

export const actionIncrementInit = () => {
  return { type: t.DISPATCH_INCREMENT_INIT };
};

export const actionIncrement = () => {
  return {
    type: t.DISPATCH_INCREMENT,
  };
};

export const actionDecrement = () => {
  return {
    type: t.DISPATCH_DECREMENT,
  };
};

//   export const actionIncrementSuccess = () => {
// 	return { type: t.DISPATCH_INCREMENT_INIT };
//   };

//   export const actionIncrementError = () => {
// 	return { type: t.DISPATCH_INCREMENT_INIT };
//   };
