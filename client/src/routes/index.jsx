import MainLayout from '@layouts/MainLayout';
import Department from '@pages/Admin/Department';
import Employee from '@pages/Admin/Employee';
import EmployeeProject from '@pages/Admin/TeamProject';
import Project from '@pages/Admin/Project';

import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Register from '@pages/Register';
import CreateDepartment from '@pages/Admin/Department/components/FormDepartment';
import FormProject from '@pages/Admin/Project/components/FormProject';

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
    path: '/admin/department/form',
    name: 'Form Department',
    protected: false,
    component: CreateDepartment,
    layout: MainLayout,
  },
  {
    path: '/admin/department/form/:id',
    name: 'Form Department',
    protected: false,
    component: CreateDepartment,
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
    path: '/admin/project/form',
    name: 'Form Project',
    protected: false,
    component: FormProject,
    layout: MainLayout,
  },
  {
    path: '/admin/project/form/:id',
    name: 'Form Project',
    protected: false,
    component: FormProject,
    layout: MainLayout,
  },
  {
    path: '/admin/team-project',
    name: 'TeamProject',
    protected: false,
    component: EmployeeProject,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
