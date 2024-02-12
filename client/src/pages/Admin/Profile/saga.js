import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading, showPopup } from '@containers/App/actions';
import { getUser } from '@domain/api';
import { setProfile } from './actions';
import {  FETCH_PROFILE } from './constants';

function* doGetProfile() {
  yield put(setLoading(true));
  try {
    const response = yield call(getUser);
    yield put(setProfile(response));
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

export default function* profileSaga() {
  yield takeLatest(FETCH_PROFILE, doGetProfile);
}