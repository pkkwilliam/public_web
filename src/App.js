import React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pages } from "./component/pages";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Router history={"hashHistory"}>
        <Switch>{generateRoutes()}</Switch>
      </Router>
    </div>
  );
}

function generateRoutes() {
  return Pages.map((page) => (
    <Route path={page.path} component={page.component} />
  ));
}

export default App;
