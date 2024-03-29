import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading, showPopup } from '@containers/App/actions';
import { deleteDepartment, fetchDepartment } from '@domain/api';
import { setDepartment } from './actions';
import { DELETE_DEPARTMENT, FETCH_DEPARTMENT } from './constants';

import toast, { Toaster } from 'react-hot-toast';

function* doFetchDepartment() {
  yield put(setLoading(true));
  try {
    const response = yield call(fetchDepartment);
    yield put(setDepartment(response.response));
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doRemoveDepartment({ id,cb }) {
  yield put(setLoading(true));
  try {
    yield call(deleteDepartment, id);
    cb();
    toast.success('Department Successfully deleted');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}


export default function* departmentSaga() {
  yield takeLatest(FETCH_DEPARTMENT, doFetchDepartment);
  yield takeLatest(DELETE_DEPARTMENT, doRemoveDepartment);
}