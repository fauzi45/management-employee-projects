import { detailProject, newProject, updateProject } from '@domain/api';
import { ADD_NEW_PROJECT, GET_DETAIL_PROJECT, UPDATE_PROJECT } from './constants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading, showPopup } from '@containers/App/actions';
import { setDetailProject } from './actions';

import toast, { Toaster } from 'react-hot-toast';

function* doNewProject({ data, cb }) {
  yield put(setLoading(true));
  try {
    yield call(newProject, data);
    cb();
    toast.success('Project Successfully created');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doGetDetailProject({ id }) {
  yield put(setLoading(true));
  try {
    const response = yield call(detailProject, id);
    yield put(setDetailProject(response.data));
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doUpdateProject({id, data, cb }) {
  yield put(setLoading(true));
  try {
    yield call(updateProject,id, data);
    cb();
    toast.success('Project Successfully updated');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

export default function* newProjectSaga() {
  yield takeLatest(ADD_NEW_PROJECT, doNewProject);
  yield takeLatest(GET_DETAIL_PROJECT, doGetDetailProject);
  yield takeLatest(UPDATE_PROJECT, doUpdateProject);
}
