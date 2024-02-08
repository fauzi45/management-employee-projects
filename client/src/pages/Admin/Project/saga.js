import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading, showPopup } from '@containers/App/actions';
import { fetchProject, deleteProject } from '@domain/api';
import { setProject } from './actions';
import { DELETE_PROJECT, FETCH_PROJECT } from './constants';

import toast, { Toaster } from 'react-hot-toast';

function* doFetchProject() {
  yield put(setLoading(true));
  try {
    const response = yield call(fetchProject);
    yield put(setProject(response.response));
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doRemoveProject({ id,cb }) {
  yield put(setLoading(true));
  try {
    yield call(deleteProject, id);
    cb();
    toast.success('Department Successfully deleted');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}


export default function* projectSaga() {
  yield takeLatest(FETCH_PROJECT, doFetchProject);
  yield takeLatest(DELETE_PROJECT, doRemoveProject);
}