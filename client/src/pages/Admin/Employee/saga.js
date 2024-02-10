import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading, showPopup } from '@containers/App/actions';
import { fetchDataEmployee } from '@domain/api';
import { setEmployeeData } from './actions';
import { FETCH_EMPLOYEE } from './constants';

function* doFetchEmployee() {
  yield put(setLoading(true));
  try {
    const response = yield call(fetchDataEmployee);
    yield put(setEmployeeData(response.response));
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

export default function* employeeSaga() {
  yield takeLatest(FETCH_EMPLOYEE, doFetchEmployee);
}