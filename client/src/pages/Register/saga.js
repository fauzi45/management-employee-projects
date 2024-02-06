import { SET_EMPLOYEE } from './constants';
import { takeLatest,put, call } from 'redux-saga/effects';
import { register } from '@domain/api';
import { showPopup, setLoading } from '@containers/App/actions';

function* doRegister({ employee, cb }) {
  yield put(setLoading(true));
  try {
    yield call(register, employee);
    cb();
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

export default function* registerSaga() {
  yield takeLatest(SET_EMPLOYEE, doRegister);
}
