import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  register: 'auth/register',
  login: 'auth/login',

  allDepartment: 'department/departmentList',
  createDepartment: 'department/create',
  detailDepartment: 'department/detail',
  updateDepartment: 'department/update',
  deleteDepartment: 'department/delete',
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

export const fetchDepartment = () => callAPI(urls.allDepartment, 'GET');
export const newDepartment = (data) => callAPI(urls.createDepartment, 'POST', {}, {}, data);
export const detailDepartment = (id) => callAPI(`${urls.detailDepartment}/${id}`, 'GET');
export const updateDepartment = (id, data) => callAPI(`${urls.updateDepartment}/${id}`, 'PUT', {}, {}, data);
export const deleteDepartment = (id) => callAPI(`${urls.deleteDepartment}/${id}`, 'DELETE');
