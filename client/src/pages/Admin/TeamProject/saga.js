import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading, showPopup } from '@containers/App/actions';
import { deleteTeamProject, fetchTeamProject } from '@domain/api';
import { setTeamProject } from './actions';
import {  DELETE_TEAM_PROJECT, FETCH_TEAM_PROJECT } from './constants';

import toast, { Toaster } from 'react-hot-toast';

function* doFetchTeamProject() {
  yield put(setLoading(true));
  try {
    const response = yield call(fetchTeamProject);
    yield put(setTeamProject(response.response));
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doRemoveTeamProject({ id,cb }) {
  yield put(setLoading(true));
  try {
    yield call(deleteTeamProject, id);
    cb();
    toast.success('Team Project Successfully deleted');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

export default function* teamProjectSaga() {
  yield takeLatest(FETCH_TEAM_PROJECT, doFetchTeamProject);
  yield takeLatest(DELETE_TEAM_PROJECT, doRemoveTeamProject);
}