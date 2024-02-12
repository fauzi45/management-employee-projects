import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading, showPopup } from '@containers/App/actions';
import { getMyTeam } from '@domain/api';
import { setMyTeam } from './actions';
import { FETCH_MYTEAM } from './constants';

function* doFetchMyTeam() {
  yield put(setLoading(true));
  try {
    const response = yield call(getMyTeam);
    yield put(setMyTeam(response));
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

export default function* myTeamSaga() {
  yield takeLatest(FETCH_MYTEAM, doFetchMyTeam);
}
