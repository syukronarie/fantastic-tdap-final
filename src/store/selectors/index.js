/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getUser = (state) => state.getUser;
export const makeSelectorGetUser = createSelector(getUser, (state) => state);
