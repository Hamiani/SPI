import List from "./List";
import Detail from "./Detail";
import Create from "./Create";

import { PATHS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import Layout from "../../Shared/Layout";

const routes = [
  {
    exact: true,
    component: Create,
    path: PATHS.CANDIDATS.CREATE,
    // access: ROUTES_ACCESS.PRIVATE,
  },
  {
    exact: true,
    component: List,
    path: PATHS.CANDIDATS.LIST,
    // access: ROUTES_ACCESS.PRIVATE,
  },

  {
    exact: true,
    component: Detail,
    path: PATHS.CANDIDATS.DETAIL,
    // access: ROUTES_ACCESS.PRIVATE,
  },
];

export default MapRoutes(routes, Layout);
