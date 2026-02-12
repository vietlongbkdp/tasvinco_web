import { AboutLayout, customerPartnerLayout, ProductCatalogLayout } from 'layouts';
import { ContactLayout } from 'layouts/contactLayout';
import HomeLayout from 'layouts/HomeLayout';
import { SignIn } from 'modules/Auth/SignIn/Loadable';
import { HomePage } from 'modules/HomePage/Loadable';

export const RoutesName = {
  LOGIN: '/login',
  HOME: '/',
  ABOUT: '/about',
  CustomerPartner: '/doi-tac-khach-hang',
  CONTACT: '/contact',
  ProductCatalog: '/danh-muc',
};

export const PUBLIC_ROUTES = [
  {
    path: RoutesName.LOGIN,
    component: SignIn,
    layout: SignIn,
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
    component: HomePage,
    layout: AboutLayout,
    exact: true,
  },
  {
    path: RoutesName.CustomerPartner,
    component: HomePage,
    layout: customerPartnerLayout,
    exact: true,
  },
  {
    path: RoutesName.CONTACT,
    component: HomePage,
    layout: ContactLayout,
    exact: true,
  },
  {
    path: RoutesName.ProductCatalog,
    component: ProductCatalogLayout,
    layout: ProductCatalogLayout,
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
