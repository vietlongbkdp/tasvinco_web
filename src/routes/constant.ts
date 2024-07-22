import HomeLayout from 'layouts/HomeLayout/home';
import { About } from 'modules/about-page';
import { SignIn } from 'modules/Auth/SignIn/Loadable';
import { HomePage } from 'modules/HomePage/Loadable';

export const RoutesName = {
  LOGIN: '/login',
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
};

export const PUBLIC_ROUTES = [
  {
    path: RoutesName.LOGIN,
    component: SignIn,
    layout: HomeLayout,
    exact: true,
  },
  {
    path: RoutesName.HOME,
    component: HomePage,
    layout: HomeLayout,
    exact: true,
  },
  {
    path: RoutesName.ABOUT,
    component: About,
    layout: HomeLayout,
    exact: true,
  },
];

export const PRIVATE_ROUTES = [
  // {
  //   path: RoutesName.HOME,
  //   component: HomePage,
  //   layout: HomeLayout,
  //   exact: true,
  // },
];

export const CUSTOME_ROUTE = [];

export default RoutesName;
