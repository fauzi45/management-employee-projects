import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { fetchDepartment } from '@domain/api';
import { setDepartment } from './actions';
import { FETCH_DEPARTMENT } from './constants';

function* doFetchDepartment() {
  yield put(setLoading(true));
  try {
    const response = yield call(fetchDepartment);
    yield put(setDepartment(response));
  } catch (error) {
    console.log(error)
  }
  yield put(setLoading(false));
}

export default function* departmentSaga() {
  yield takeLatest(FETCH_DEPARTMENT, doFetchDepartment);
}