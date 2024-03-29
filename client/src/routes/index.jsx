import MainLayout from '@layouts/MainLayout';
import Department from '@pages/Admin/Department';
import Employee from '@pages/Admin/Employee';
import TeamProject from '@pages/Admin/TeamProject';
import Project from '@pages/Admin/Project';

import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Register from '@pages/Register';
import CreateDepartment from '@pages/Admin/Department/components/FormDepartment';
import FormProject from '@pages/Admin/Project/components/FormProject';
import FormEmployee from '@pages/Admin/Employee/components/FormEmployee';
import FormTeamProject from '@pages/Admin/TeamProject/components/FormTeamProject';
import HomeUser from '@pages/User/Home';
import Detail from '@pages/User/Detail';

const routes = [
  {
    path: '/admin',
    name: 'Home',
    protected: true,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/admin/employee',
    name: 'Employee',
    protected: true,
    component: Employee,
    layout: MainLayout,
  },
  ,
  {
    path: '/admin/Employee/form',
    name: 'Form Employee',
    protected: true,
    component: FormEmployee,
    layout: MainLayout,
  },
  {
    path: '/admin/Employee/form/:id',
    name: 'Form Employee',
    protected: true,
    component: FormEmployee,
    layout: MainLayout,
  },
  {
    path: '/admin/department/form',
    name: 'Form Department',
    protected: true,
    component: CreateDepartment,
    layout: MainLayout,
  },
  {
    path: '/admin/department/form/:id',
    name: 'Form Department',
    protected: true,
    component: CreateDepartment,
    layout: MainLayout,
  },
  {
    path: '/admin/department',
    name: 'Department',
    protected: true,
    component: Department,
    layout: MainLayout,
  },
  {
    path: '/admin/project',
    name: 'Project',
    protected: true,
    component: Project,
    layout: MainLayout,
  },
  {
    path: '/admin/project/form',
    name: 'Form Project',
    protected: true,
    component: FormProject,
    layout: MainLayout,
  },
  {
    path: '/admin/project/form/:id',
    name: 'Form Project',
    protected: true,
    component: FormProject,
    layout: MainLayout,
  },
  {
    path: '/admin/team-project',
    name: 'TeamProject',
    protected: true,
    component: TeamProject,
    layout: MainLayout,
  },
  {
    path: '/admin/team-project/form',
    name: 'Form Team Project',
    protected: true,
    component: FormTeamProject,
    layout: MainLayout,
  },
  {
    path: '/admin/team-project/form/:id',
    name: 'Form Project',
    protected: true,
    component: FormTeamProject,
    layout: MainLayout,
  },

  {
    path: '/user',
    name: 'Home User',
    protected: true,
    component: HomeUser,
    layout: MainLayout,
  },
  {
    path: '/user/my-project/:id',
    name: 'My Project',
    protected: true,
    component: Detail,
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
