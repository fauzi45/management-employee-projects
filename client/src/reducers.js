import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import languageReducer from '@containers/Language/reducer';

import { mapWithPersistor } from './persistence';
import registerReducer, { storedKey as storedEmployee } from '@pages/Register/reducer';
import loginReducer, { storedKey as storedEmployeeLogin } from '@pages/Login/reducer';
import departmentReducer, { storedKey as storedDepartment } from '@pages/Admin/Department/reducer';
import createNewDepartment,{ storedKey as storedNewDepartment} from '@pages/Admin/Department/components/FormDepartment/reducer';
import projectReducer,{ storedKey as storedProject} from '@pages/Admin/Project/reducer';
import createNewProject,{ storedKey as storedNewProject} from '@pages/Admin/Project/components/FormProject/reducer';
import employeeReducer,{ storedKey as storedDataEmployee} from '@pages/Admin/Employee/reducer';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  register: {reducer: registerReducer, whitelist: storedEmployee},
  login: {reducer: loginReducer, whitelist: storedEmployeeLogin},

  department: {reducer: departmentReducer, whitelist: storedDepartment},
  newDepartment: {reducer: createNewDepartment, whitelist: storedNewDepartment},

  project: { reducer: projectReducer, whitelist: storedProject },
  newProject: {reducer: createNewProject, whitelist: storedNewProject},

  employeeData: { reducer: employeeReducer, whitelist: storedDataEmployee },
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
