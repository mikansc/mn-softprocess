import HomePage from "../HomePage";
import ProcessList from "../ProcessList";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/process",
    component: ProcessList,
    exact: true,
  },
];

export default routes;
