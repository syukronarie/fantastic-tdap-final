import { call, put, takeLatest } from "redux-saga/effects";

import * as a from "./getUser.slices";
import { apiGetUser } from "./getUser.apis";

export function* getUser() {
  try {
    const response = yield call(apiGetUser);
    yield put(a.actionReceiveGetUserSuccess(response.data));
  } catch (err) {
    yield put(a.actionReceiveGetUserError(err));
  }
}

export function* GetUser() {
  yield takeLatest(a.actionRequestGetUser.type, getUser);
}
