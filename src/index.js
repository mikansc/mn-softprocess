import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import routes from "./routes";

import "react-toastify/dist/ReactToastify.css";
import "./assets/css/global.css";

const App = () => (
  <>
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
    <ToastContainer autoClose={5000} />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
