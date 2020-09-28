import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MianWang from "./leaderfocus/product/shuang_fu/mianWang";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Router>
        <Route path="/leaderfocus/campaign_1" component={MianWang} />
      </Router>
    </div>
  );
}

export default App;
