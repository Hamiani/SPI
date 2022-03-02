import List from "./List";
import Detail from "./Detail";
import Create from "./Create";
import Update from "./Update";

import { PATHS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import Layout from "../../Shared/Layout";

const routes = [
  {
    exact: true,
    component: Create,
    path: PATHS.FORMATIONS.CREATE,
    // access: ROUTES_ACCESS.PRIVATE,
  },
  {
    exact: true,
    component: Update,
    path: PATHS.FORMATIONS.UPDATE,
    // access: ROUTES_ACCESS.PRIVATE,
  },
  {
    exact: true,
    component: List,
    path: PATHS.FORMATIONS.HOME,
    // access: ROUTES_ACCESS.PRIVATE,
  },
  {
    exact: true,
    component: Detail,
    path: PATHS.FORMATIONS.DETAIL,
    // access: ROUTES_ACCESS.PRIVATE,
  },
];

export default MapRoutes(routes, Layout);
