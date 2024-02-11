import { detailEmployee, register, updateEmployee } from '@domain/api';
import {ADD_NEW_EMPLOYEE, GET_DETAIL_EMPLOYEE, UPDATE_EMPLOYEE } from './constants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading, showPopup } from '@containers/App/actions';
import { setDetailEmployee } from './actions';

import toast from 'react-hot-toast';

function* doNewEmployee({ data, cb }) {
  yield put(setLoading(true));
  try {
    yield call(register, data);
    cb();
    toast.success('Employee Successfully created');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doGetDetailEmployee({ id }) {
  yield put(setLoading(true));
  try {
    const response = yield call(detailEmployee, id);
    yield put(setDetailEmployee(response.data));
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doUpdateEmployee({id, data, cb }) {
  yield put(setLoading(true));
  try {
    yield call(updateEmployee,id, data);
    cb();
    toast.success('Employee Successfully updated');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

export default function* newEmployeeSaga() {
  yield takeLatest( ADD_NEW_EMPLOYEE, doNewEmployee);
  yield takeLatest(GET_DETAIL_EMPLOYEE, doGetDetailEmployee);
  yield takeLatest(UPDATE_EMPLOYEE, doUpdateEmployee);
}
