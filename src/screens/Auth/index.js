import Registration from "./Registration";
import Login from "./Login";
import Logout from "./Logout";
import Layout from "../../Shared/Layout";
import { PATHS, ROUTES_ACCESS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";

const routes = [
  {
    exact: true,
    component: Registration,
    path: PATHS.REGISTRATION,
    access: ROUTES_ACCESS.PUBLIC,
  },
  {
    exact: true,
    component: Login,
    path: PATHS.LOGIN,
    access: ROUTES_ACCESS.PUBLIC,
  },
  {
    exact: true,
    component: Logout,
    path: PATHS.LOGOUT,
    access: ROUTES_ACCESS.PUBLIC,
  },
];

export default MapRoutes(routes, Layout);
