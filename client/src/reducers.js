import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import languageReducer from '@containers/Language/reducer';

import { mapWithPersistor } from './persistence';
import registerReducer, { storedKey as storedEmployee } from '@pages/Register/reducer';
import departmentReducer, { storedKey as storedDepartment } from '@pages/Admin/Department/reducer';
import createNewDepartment,{ storedKey as storedNewDepartment} from '@pages/Admin/Department/components/FormDepartment/reducer';
import projectReducer,{ storedKey as storedProject} from '@pages/Admin/Project/reducer';
import createNewProject,{ storedKey as storedNewProject} from '@pages/Admin/Project/components/FormProject/reducer';
import employeeReducer,{ storedKey as storedDataEmployee} from '@pages/Admin/Employee/reducer';
import profileReducer,{ storedKey as storedProfile} from '@pages/Admin/Profile/reducer';
import teamProjectReducer,{ storedKey as storedTeamProject} from '@pages/Admin/TeamProject/reducer';
import createNewEmployeeReducer,{ storedKey as storedNewEmployee} from '@pages/Admin/Employee/components/FormEmployee/reducer';
import createNewTeamProject,{ storedKey as storedNewTeamProject} from '@pages/Admin/TeamProject/components/FormTeamProject/reducer';
import myTeamReducer,{ storedKey as storedMyTeam} from '@pages/User/Home/reducer';
import myDetailReducer,{ storedKey as storedMyDetail} from '@pages/User/Detail/reducer';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  register: {reducer: registerReducer, whitelist: storedEmployee},
  profile: {reducer: profileReducer, whitelist: storedProfile},

  department: {reducer: departmentReducer, whitelist: storedDepartment},
  newDepartment: {reducer: createNewDepartment, whitelist: storedNewDepartment},

  project: { reducer: projectReducer, whitelist: storedProject },
  newProject: {reducer: createNewProject, whitelist: storedNewProject},

  employeeData: { reducer: employeeReducer, whitelist: storedDataEmployee },
  newEmployee: {reducer: createNewEmployeeReducer, whitelist: storedNewEmployee},

  teamProject: { reducer: teamProjectReducer, whitelist: storedTeamProject },
  newTeamProject: {reducer: createNewTeamProject, whitelist: storedNewTeamProject},

  myTeam: {reducer: myTeamReducer, whitelist: storedMyTeam},
  myDetail: {reducer: myDetailReducer, whitelist: storedMyDetail}
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
