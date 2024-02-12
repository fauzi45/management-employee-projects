import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  register: 'auth/register',
  login: 'auth/login',
  getUser: 'auth/getUser',
  getMyTeam: 'auth/getMyTeamProject',

  allDepartment: 'department/departmentList',
  createDepartment: 'department/create',
  detailDepartment: 'department/detail',
  updateDepartment: 'department/update',
  deleteDepartment: 'department/delete',

  allProject: 'project/projectList',
  createProject: 'project/create',
  detailProject: 'project/detail',
  updateProject: 'project/update',
  deleteProject: 'project/delete',

  allEmployee: 'employee/employeeList',
  createEmployee: 'employee/create',
  detailEmployee: 'employee/detail',
  updateEmployee: 'employee/update',
  deleteEmployee: 'employee/delete',

  allTeamProject: 'team-project/list',
  createTeamProject: 'team-project/create',
  detailTeamProject: 'team-project/detail',
  updateTeamProject: 'team-project/update',
  deleteTeamProject: 'team-project/delete',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');
export const register = (dataEmployee) => {
  console.log(dataEmployee, '<<< DATA USER API');
  return callAPI(urls.register, 'POST', {}, {}, dataEmployee);
};
export const login = (login) => {
  return callAPI(urls.login, 'POST', {}, {}, login);
};

export const getUser = () => callAPI(urls.getUser, 'GET');
export const getMyTeam = () => callAPI(urls.getMyTeam, 'GET');
export const fetchDepartment = () => callAPI(urls.allDepartment, 'GET');
export const newDepartment = (data) => callAPI(urls.createDepartment, 'POST', {}, {}, data);
export const detailDepartment = (id) => callAPI(`${urls.detailDepartment}/${id}`, 'GET');
export const updateDepartment = (id, data) => callAPI(`${urls.updateDepartment}/${id}`, 'PUT', {}, {}, data);
export const deleteDepartment = (id) => callAPI(`${urls.deleteDepartment}/${id}`, 'DELETE');

export const fetchProject = () => callAPI(urls.allProject, 'GET');
export const newProject = (data) => callAPI(urls.createProject, 'POST', {}, {}, data);
export const detailProject = (id) => callAPI(`${urls.detailProject}/${id}`, 'GET');
export const updateProject = (id, data) => callAPI(`${urls.updateProject}/${id}`, 'PUT', {}, {}, data);
export const deleteProject = (id) => callAPI(`${urls.deleteProject}/${id}`, 'DELETE');

export const fetchDataEmployee = () => callAPI(urls.allEmployee, 'GET');
export const detailEmployee = (id) => callAPI(`${urls.detailEmployee}/${id}`, 'GET');
export const updateEmployee = (id, data) => callAPI(`${urls.updateEmployee}/${id}`, 'PUT', {}, {}, data);
export const deleteEmployee = (id) => callAPI(`${urls.deleteEmployee}/${id}`, 'DELETE');

export const fetchTeamProject = () => callAPI(urls.allTeamProject, 'GET');
export const newTeamProject = (data) => callAPI(urls.createTeamProject, 'POST', {}, {}, data);
export const detailTeamProject = (id) => callAPI(`${urls.detailTeamProject}/${id}`, 'GET');
export const updateTeamProject = (id, data) => callAPI(`${urls.updateTeamProject}/${id}`, 'PUT', {}, {}, data);
export const deleteTeamProject = (id) => callAPI(`${urls.deleteTeamProject}/${id}`, 'DELETE');
