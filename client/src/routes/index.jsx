import MainLayout from '@layouts/MainLayout';
import Department from '@pages/Admin/Department';
import Employee from '@pages/Admin/Employee';
import Project from '@pages/Admin/Project';

import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/admin/employee',
    name: 'Employee',
    protected: false,
    component: Employee,
    layout: MainLayout,
  },
  {
    path: '/admin/department',
    name: 'Department',
    protected: false,
    component: Department,
    layout: MainLayout,
  },
  {
    path: '/admin/project',
    name: 'Project',
    protected: false,
    component: Project,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
