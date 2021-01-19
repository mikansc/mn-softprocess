import HomePage from "../HomePage";
import ProcessDetailsPage from "../ProcessDetailsPage";
import ProcessListPage from "../ProcessListPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/process",
    component: ProcessListPage,
    exact: true,
  },
  {
    path: "/process/:id",
    component: ProcessDetailsPage,
  },
];

export default routes;
