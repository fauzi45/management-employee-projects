import { detailDepartment, newDepartment, updateDepartment } from '@domain/api';
import { ADD_NEW_DEPARTMENT, GET_DETAIL_DEPARTMENT, UPDATE_DEPARTMENT } from './constants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading, showPopup } from '@containers/App/actions';
import { setDetailDepartment } from './actions';

import toast, { Toaster } from 'react-hot-toast';

function* doNewDepartment({ data, cb }) {
  yield put(setLoading(true));
  try {
    yield call(newDepartment, data);
    cb();
    toast.success('Department Successfully created');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doGetDetailDepartment({ id }) {
  yield put(setLoading(true));
  try {
    const response = yield call(detailDepartment, id);
    yield put(setDetailDepartment(response.data));
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doUpdateDepartment({id, data, cb }) {
  yield put(setLoading(true));
  try {
    yield call(updateDepartment,id, data);
    cb();
    toast.success('Department Successfully updated');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

export default function* newDepartmentSaga() {
  yield takeLatest(ADD_NEW_DEPARTMENT, doNewDepartment);
  yield takeLatest(GET_DETAIL_DEPARTMENT, doGetDetailDepartment);
  yield takeLatest(UPDATE_DEPARTMENT, doUpdateDepartment);
}
