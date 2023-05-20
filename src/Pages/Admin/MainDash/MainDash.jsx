import React from "react";

import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <div className="heading-title">
        <h1>Details</h1>
      </div>
      <Table />
    </div>
  );
};

export default MainDash;
