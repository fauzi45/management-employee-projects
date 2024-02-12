import { detailTeamProject, newTeamProject, updateTeamProject } from '@domain/api';
import { ADD_NEW_TEAM_PROJECT, GET_DETAIL_TEAM_PROJECT, UPDATE_TEAM_PROJECT } from './constants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading, showPopup } from '@containers/App/actions';

import toast, { Toaster } from 'react-hot-toast';
import { setDetailTeamProject } from './actions';

function* doNewTeamProject({ data, cb }) {
  yield put(setLoading(true));
  try {
    yield call(newTeamProject, data);
    cb();
    toast.success('Team Project Successfully created');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doGetDetailTeamProject({ id }) {
  yield put(setLoading(true));
  try {
    const response = yield call(detailTeamProject, id);
    yield put(setDetailTeamProject(response.data));
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

function* doUpdateTeamProject({id, data, cb }) {
  yield put(setLoading(true));
  try {
    yield call(updateTeamProject,id, data);
    cb();
    toast.success('Team Project Successfully updated');
  } catch (error) {
    yield put(showPopup(error.info));
  }
  yield put(setLoading(false));
}

export default function* newTeamProjectSaga() {
  yield takeLatest(ADD_NEW_TEAM_PROJECT, doNewTeamProject);
  yield takeLatest(GET_DETAIL_TEAM_PROJECT, doGetDetailTeamProject);
  yield takeLatest(UPDATE_TEAM_PROJECT, doUpdateTeamProject);
}
