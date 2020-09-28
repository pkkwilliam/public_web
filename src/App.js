import React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import MianWang from "./leaderfocus/product/shuang_fu/mianWang";
import Home from "./home/home";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Router history={"hashHistory"}>
        <Switch>
          <Route path="/leaderfocus/mian_wang" component={MianWang} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
