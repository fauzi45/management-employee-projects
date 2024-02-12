import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';
import departmentSaga from '@pages/Admin/Department/saga';
import newDepartmentSaga from '@pages/Admin/Department/components/FormDepartment/saga';
import projectSaga from '@pages/Admin/Project/saga';
import newProjectSaga from '@pages/Admin/Project/components/FormProject/saga';
import employeeSaga from '@pages/Admin/Employee/saga';
import profileSaga from '@pages/Admin/Profile/saga';
import newEmployeeSaga from '@pages/Admin/Employee/components/FormEmployee/saga';
import teamProjectSaga from '@pages/Admin/TeamProject/saga';
import newTeamProjectSaga from '@pages/Admin/TeamProject/components/FormTeamProject/saga';
import myTeamSaga from '@pages/User/Home/saga';
import myDetailSaga from '@pages/User/Detail/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    registerSaga(),
    loginSaga(),
    profileSaga(),

    departmentSaga(),
    newDepartmentSaga(),
    
    projectSaga(),
    newProjectSaga(),

    employeeSaga(),
    newEmployeeSaga(),

    teamProjectSaga(),
    newTeamProjectSaga(),

    myTeamSaga(),
    myDetailSaga()
  ]);
}
