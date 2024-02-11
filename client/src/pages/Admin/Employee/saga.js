import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading, showPopup } from '@containers/App/actions';
import { deleteEmployee, fetchDataEmployee } from '@domain/api';
import { setEmployeeData } from './actions';
import { DELETE_EMPLOYEE, FETCH_EMPLOYEE } from './constants';

import toast, { Toaster } from 'react-hot-toast';


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

function* doRemoveEmployee({ id,cb }) {
  yield put(setLoading(true));
  try {
    yield call(deleteEmployee, id);
    cb();
    toast.success('Employee Successfully deleted');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

export default function* employeeSaga() {
  yield takeLatest(FETCH_EMPLOYEE, doFetchEmployee);
  yield takeLatest(DELETE_EMPLOYEE, doRemoveEmployee);
}