import { checkAuthorization } from "./helper";

import NotFound from "../../Shared/NotFound";
//import Auth from "../Auth";
import Formations from "../Formations";
import Teachers from "../Teachers";
import Promotions from "../Promotions";
import Candidats from "../Candidats";

const routes = [
  //...Auth,
  ...Promotions,
  ...Teachers,
  ...Formations,
  ...Candidats,
  { component: NotFound },
];

//export default (authorization) => checkAuthorization({ routes, authorization });
export default routes;
