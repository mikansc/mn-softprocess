import HomePage from "../HomePage";
import ProcessPage from "../ProcessPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/process",
    component: ProcessPage,
  },
];

export default routes;
