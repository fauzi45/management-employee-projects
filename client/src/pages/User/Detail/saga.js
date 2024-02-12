import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { setMyDetail } from './actions';
import { GET_MY_DETAIL } from './constants';
import { getDetailMyTeam } from '@domain/api';

function* doFetchMyProject({ id, cb }) {
  yield put(setLoading(true));
  try {
    const response = yield call(getDetailMyTeam, id);
    yield put(setMyDetail(response));
  } catch (error) {
    if (error?.response?.status === 404) {
      cb();
    } else {
      yield put(showPopup());
    }
  }
  yield put(setLoading(false));
}

export default function* myDetailSaga() {
  yield takeLatest(GET_MY_DETAIL, doFetchMyProject);
}
