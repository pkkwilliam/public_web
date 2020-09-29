import React from "react";
import Button from "react-bootstrap/esm/Button";
import logo from "../logo.svg";
import { useHistory } from "react-router-dom";
import { Pages } from "./pages";

export default function Home(props) {
  const history = useHistory();

  return (
    <div style={{ margin: 20 }}>
      <header>
        <img src={logo} style={{ maxHeight: 100 }} alt="logo" />
        <p>
          This site and advertisments was constructed and distributed by
          GooWhere.com
        </p>
        <p>All rights are reserved to Tensor Tenology Ltd</p>
        <p>
          Please contact if service is needed to advertise your product 63530392
          tensortechnology@gmail.com
        </p>
        {generateRedirectButton(history)}
      </header>
    </div>
  );
}

function generateRedirectButton(history) {
  return Pages.map((page) => (
    <Button onClick={() => history.push(page.path)} style={{ marginRight: 5 }}>
      {page.name}
    </Button>
  ));
}
