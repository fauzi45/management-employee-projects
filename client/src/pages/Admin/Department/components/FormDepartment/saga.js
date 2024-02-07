import { newDepartment } from "@domain/api";
import { ADD_NEW_DEPARTMENT } from "./constants";
import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from "@containers/App/actions";

function* doNewDepartment({ data, cb }) {
    yield put(setLoading(true));
    try {
      yield call(newDepartment, data);
      cb();
    } catch (error) {
      console.log(error);
    }
    yield put(setLoading(false));
  }
  
  export default function* newDepartmentSaga() {
    yield takeLatest(ADD_NEW_DEPARTMENT, doNewDepartment);
  }