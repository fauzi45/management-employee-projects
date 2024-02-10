import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';
import departmentSaga from '@pages/Admin/Department/saga';
import newDepartmentSaga from '@pages/Admin/Department/components/FormDepartment/saga';
import projectSaga from '@pages/Admin/Project/saga';
import newProjectSaga from '@pages/Admin/Project/components/FormProject/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    registerSaga(),
    loginSaga(),
    departmentSaga(),
    newDepartmentSaga(),
    projectSaga(),
    newProjectSaga()
  ]);
}
