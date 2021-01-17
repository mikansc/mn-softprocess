import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";

import "./assets/css/global.css";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
