import MainLayout from '@layouts/MainLayout';
import Department from '@pages/Admin/Department';

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
    path: '/admin/department',
    name: 'Department',
    protected: false,
    component: Department,
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
