import React from "react";
import AdminRealTime from "./AdminRealTimeForm";
import RealTimeTable from "./RealTimeTable";
import "./RealTime.css";
const Index = () => {
  return (
    <div className="realTime">
      <h1>Real Time Data</h1>
      <AdminRealTime />
      <RealTimeTable />
    </div>
  );
};

export default Index;
