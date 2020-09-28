import React from "react";
import logo from "../logo.svg";

export default function Home() {
  return (
    <div style={{ margin: 20 }}>
      <header>
        <img src={logo} style={{ maxHeight: 100 }} alt="logo" />
        <p>
          This website and advertisment was constructed and distributed by
          GooWhere.com
        </p>
        <p>All rights are reserved to Tensor Tenology Ltd</p>
      </header>
    </div>
  );
}
