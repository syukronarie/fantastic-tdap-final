/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  success: false,
  error: false,
  data: [],
};

const getUser = createSlice({
  name: 'getUser',
  initialState,
  reducers: {
    actionRequestGetUser: (state) => state,
    actionRequestGetUserInit: (state) => (state = initialState),
    actionReceiveGetUserSuccess: (state, action) => {
      // console.log(action);
      return (state = {
        success: true,
        error: false,
        data: action.payload.data,
      });
    },
    actionReceiveGetUserError: (state, action) =>
      (state = {
        success: false,
        error: true,
        ...action.payload,
      }),
  },
});

export const { actionRequestGetUser, actionRequestGetUserInit, actionReceiveGetUserSuccess, actionReceiveGetUserError } =
  getUser.actions;

export const getUserReducer = getUser.reducer;
export const getUserInitialState = getUser.getInitialState;

export default getUser;
