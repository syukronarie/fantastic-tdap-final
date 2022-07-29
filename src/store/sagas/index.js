/* eslint-disable import/prefer-default-export */
import { all } from 'redux-saga/effects';
import { GetUser } from '../states/getUsers/getUser.sagas';

export function* watchSagas() {
  yield all([GetUser()]);
}
